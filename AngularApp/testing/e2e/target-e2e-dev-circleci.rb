# require %{em/pure_ruby}
require %{capybara}
require %{capybara/dsl}
require %{capybara/rspec}
require %{capybara/rspec/matcher_proxies}
require %{rspec/expectations}
require %{rails_helper}
require %{percy}
require %{selenium/webdriver}
require %{selenium-webdriver}
require %{net/http}
require %{rest-client}
require %{json}
require %{pp}
require %{uri}
require %{billy/capybara/rspec}
require_relative %{./downloadhelpers.rb}
include DownloadHelpers
# load  %{testmod.rb}


# dev additions
# require %{rotp}
require %{table_print}
#

# dev setup
module Capybara
  include DownloadHelpers
end
class Capybara::Node::Element
  def select_option(wait: nil)
    begin
      raise 's'
    rescue => exception
      scroll_to self
      synchronize(wait) { base.click }
      self
    end
  end
end
# Selenium::WebDriver.logger.level = :debug
# Selenium::WebDriver.logger.output = %{selenium.log}
Capybara.raise_server_errors = false
Capybara.run_server = false
Capybara.default_max_wait_time = 20
Capybara.ignore_hidden_elements = false
# Capybara.javascript_driver = :selenium_chrome_billy

$client = nil

# dev additions
$timeouts = Hash[
  :load_page => Hash[
      :chrome_billy =>  15,
      :firefox_billy => 15,
  ],
  :project_links => Hash[
      :chrome_billy => 10,
      :firefox_billy => 10,
  ],
]
#



Capybara.register_driver :chrome_billy do |app|

  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument %{--headless}
  options.add_argument %{--disable-infobars}
  options.add_argument %{--disable-notifications}
  options.add_argument %{--start-maximized}
  options.add_argument %{--no-sandbox}
  options.add_argument %{--disable-gpu}
  options.add_argument %{--disable-dev-shm-usage}
  options.add_argument %{--ignore-certificate-errors}
  options.add_argument %{--proxy-server=#{Billy.proxy.host}:#{Billy.proxy.port}}
  options.add_argument " --proxy-bypass-list=<-loopback>" # New argument here to ensure requests to localhost are sent to Puffing Billy's proxy

  options.add_preference :download, prompt_for_download: false, default_directory: DownloadHelpers::PATH.to_s
  options.add_preference :browser, set_download_behavior: { behavior: 'allow' }
  Capybara::Selenium::Driver.new(
  	app,
  	:browser => :chrome,
  :options => options,
  :clear_local_storage => true,
  :clear_session_storage => true
  )
end


Capybara.register_driver :firefox_billy do |app|
  profile = Selenium::WebDriver::Firefox::Profile.new
  profile.assume_untrusted_certificate_issuer = false
  profile.proxy = Selenium::WebDriver::Proxy.new(
    http: "#{Billy.proxy.host}:#{Billy.proxy.port}",
    ssl: "#{Billy.proxy.host}:#{Billy.proxy.port}")


  options  =  Selenium::WebDriver::Firefox::Options.new(:profile => profile)
  options.args << %{--headless}
  capabilities = Selenium::WebDriver::Remote::Capabilities.firefox(:accept_insecure_certs => true)
  Capybara::Selenium::Driver.new(
    app,
    options: options,
    desired_capabilities: capabilities
  )
end

# RSpec configs
RSpec.configure do |config|

    # my_drivers = %i{ firefox_billy  }
  my_drivers = %i{chrome_billy firefox_billy}
  hosts = Hash.new
  hosts[:dev] =  ENV[%{FRONTEND_URL}]

  config.full_backtrace = false
  config.backtrace_exclusion_patterns = [
        /\/lib\d*\/ruby\//,
        /bin\//,
        /gems/,
        /spec\/spec_helper\.rb/,
        /lib\/rspec\/(core|expectations|matchers|mocks)/
  ]

  config.before :example do

    visit %{/}
    clear_helper_downloads

    begin
      page.current_window.maximize
    rescue
      nil
    end

    # dev additions

    #

    sleep $timeouts[:load_page][Capybara.current_driver.to_sym]



  end

  config.after :example do

    # dev additions
    clear_helper_downloads
    #

  end

  config.around do |example|
    $example  = example
    my_drivers.each do |browser|
      Capybara.current_driver = browser


      hosts.each do |k,v|
        Capybara.current_driver = browser
        Capybara.javascript_driver = Hash[
          :chrome_billy => :selenium_chrome_billy,
          :firefox_billy =>:selenium_billy
        ][browser.to_sym]

        Capybara.app_host = v
        # A Identifying and running each scenario
          # PP.pp example.metadata
        p Capybara.app_host.to_s +  %{ in } + Capybara.current_driver.to_s
        p %{scenario #{example.metadata[:description]}}
        begin
          example.run
        rescue => exception
          page.driver.quit
        end
        # A
      end
    end
  end

  config.before :suite do
    # dev additions

    # stub all requests to the backend and make sure the browser sends to  the testing backend

    #

    # delete the user from the user pool if they are still there

    #
  end

  config.after :suite do
    # dev addtions

    #

  end
end
#


# puffing billy configuration
Billy.configure do |c|

  # c.cache = true
  c.proxy_port = 64190
  c.record_requests = true
  # c.whitelist << %{#{$host}:4521}# to append a host without overriding the defaults.
  # c.whitelist << %{127.0.0.1:4521}
  # c.whitelist << ENV[%{BACKEND_URL}]
  # c.whitelist << %{127.0.0.1:3005}
  c.logger = nil
  c.persist_cache = true

  # pp c

end
#


def stagingTest
@javascript
  RSpec.feature  %{misc}, :skip => true  do

	scenario %{check that puffing billy is working}  do
      my_response = []
      my_proc = Proc.new do |*args|
        response = Billy.pass_request(*args)
        my_response << r
        PP.pp response
      end
      proxy.stub(ENV[%{FRONTEND_URL}]).and_return(my_proc)
      sleep 10
      expect(my_response.size).not_to eq 0
      # PP.pp Billy.proxy.requests
    end

  end

  RSpec.feature  %{Intro Module}   do

    scenario %{intro is working properly} do

        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Intro /intro }

        my_text = first %{.a_p_p_IntroPhraseText}
        image = first %{.a_p_p_IntroPhraseImage}

        strings = [
            Hash[
                :text=>%{Find the Problem, Find the Solution.},
            ],
            Hash[
                :text=>%{Demo. Design. Develop. Deploy.},
            ],
            Hash[
                :text=>%{Believe in the mission and the team.},
            ]
        ]

        strings.collect.with_index do |x,i|
            my_val = my_text.text
            p x
            expect(my_val).to eq(x[:text])
            sleep 4
        end

    end

    scenario %{we are at home module after intro module animation} do

        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Intro /intro }
        sleep 15
        expect(page).to have_current_path %{/home}
    end

  end

  RSpec.feature  %{Home Module}   do

    scenario %{navigation opacity reveal accordingly} do

        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Home /home }


        links = all %{.a_p_p_NavItem}
        links.collect do |x|
            my_opac = (x.style :opacity)[%{opacity}].to_f
            expect(my_opac).to be > 0.1
            sleep 0.8
        end
        sleep 1
        unless Capybara.current_driver == :chrome_billy
            main_img = first %{.a_p_p_MainImage}
            my_opac = (main_img.style :opacity)[%{opacity}].to_f
            expect(my_opac).to be > 0.1
        end

    end

    scenario %{navigate back to intro and home respectively} do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Home /home }
        sleep 5
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Intro /intro }
        my_text = first %{.a_p_p_IntroPhraseText}
        image = first %{.a_p_p_IntroPhraseImage}

        strings = [
            Hash[
                :text=>%{Find the Problem, Find the Solution.},
            ],
            Hash[
                :text=>%{Demo. Design. Develop. Deploy.},
            ],
            Hash[
                :text=>%{Believe in the mission and the team.},
            ]
        ]

        strings.collect.with_index do |x,i|
            my_val = my_text.text
            p x
            expect(my_val).to eq(x[:text])
            sleep 4
        end
    end


  end

  RSpec.feature  %{Resume Module}    do

    scenario %{the links to the projects are working } do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Resume /resume }
        [
            %{https://michaelodumosu57 .github.io/Facebook_Project},
            %{https://gx8pv.csb.app},
            %{https://michaelodumosu57 .github.io/SocialMediaApp},
        ].collect.with_index do |x,i|

            proj_link1 = find %{a},:text => x
            proj_link1.click
            if x == %{https://michaelodumosu57 .github.io/Facebook_Project}
              accept_alert do
                nil
              end
              my_background = first %{.a_p_p_MainBackground}
              background_image = ( my_background.style :backgroundImage)[%{backgroundImage}]
              unless background_image != %{}
              background_image = page.execute_script %Q{
                  return getComputedStyle(
                      document.querySelector(".a_p_p_MainBackground")
                    )["backgroundImage"]
                }
              end
              expect(background_image).to eq %{radial-gradient(at 40px 40px, rgb(255, 255, 255) 0px, rgb(0, 255, 255), rgb(0, 128, 0) 100%)}
              # radial-gradient(farthest-corner at 40px 40px,#fff 0,#0ff,green 100%)
              elsif x == %{https://gx8pv.csb.app}
                my_text = find %{h1},:text=>%{Welcome to the Uploader Site}
                expect(my_text).to be_truthy
              elsif x == %{https://michaelodumosu57 .github.io/SocialMediaApp}
                my_text = find %{h2},:text=>%{Post Once Upload On All Your Apps}
                expect(my_text).to be_truthy
            end
            sleep $timeouts[:project_links][Capybara.current_driver.to_sym]
            visit %{/resume}
        end
    end

    scenario %{when the user clicks download we get a pdf} do
        unless Capybara.current_driver != %{chrome_billy}
            opening_nav :driver =>Capybara.current_driver,
            :target => %w{ Resume /resume }
            my_download = find %{a},:text => %{Download Resume}
            my_download.click
            wait_for_helper_download
            expect(helper_downloads.length).to eq 1
            expect(helper_download).to match /michael_odumosu.pdf/
        end
    end

  end

  RSpec.feature  %{Testimony Module}   do

    scenario %{on start we are automatically paginating} do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Stories /testimony }
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        old_text = val.text
        sleep 4
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        new_text = val.text
        expect(new_text).to_not eq old_text
    end

    scenario %{when hit pause we pause and when we hit resume we resume} do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Stories /testimony }
        play= find %{button},:text => %{Pause}
        play.click
        sleep 1
        expect(play.text).to eq %{Resume}

        # test that the carousel is not moving
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        old_text = val.text
        sleep 4
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        new_text = val.text
        expect(new_text).to eq old_text
        #

        play.click
        sleep 1
        expect(play.text).to eq %{Pause}

        # test that the carousel is moving again
        visit %{testimony}
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        old_text = val.text
        sleep 5
        val = first %{.a_p_p_TestimonyItemName},:visible =>true
        new_text = val.text
        expect(new_text).to_not eq old_text
        #
    end
  end

  RSpec.feature  %{Contact Module}  do

    scenario %{links to contact me are working} do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Contact /contact }
        links = [
            Hash[
                :url=>%{https://www.linkedin.com},
                :text=> %{Linkedin}
            ],
            Hash[
                :url=>%{https://www.facebook.com},
                :text=> %{Facebook}
            ],
            Hash[
                :url=>%{https://twitter.com/MOdumosu},
                :text=> %{Twitter}
            ],
            Hash[
                :url=>%{https://app.slack.com},
                :text=> %{Slack}
            ],
            Hash[
                :url=>%{https://discord.com},
                :text=> %{Discord}
            ]
        ]
        links.collect do |x|
            my_x = find %{h2},:text => x[:text]
            my_x.click
            expect(current_url).to include x[:url]
            sleep 2
            visit %{/contact}

        end
    end
  end

  RSpec.feature  %{staging} , :skip => true  do

    scenario %{the links to the projects are working } do
        opening_nav :driver =>Capybara.current_driver,
        :target => %w{ Resume /resume }
        [
            %{https://michaelodumosu57 .github.io/Facebook_Project},
            %{https://gx8pv.csb.app},
            %{https://michaelodumosu57 .github.io/SocialMediaApp},
        ].collect.with_index do |x,i|

            proj_link1 = find %{a},:text => x
            proj_link1.click
            if x == %{https://michaelodumosu57 .github.io/Facebook_Project}
              accept_alert do
                nil
              end
              my_background = first %{.a_p_p_MainBackground}
              background_image = ( my_background.style :backgroundImage)[%{backgroundImage}]
              unless background_image != %{}
              background_image = page.execute_script %Q{
                  return getComputedStyle(
                      document.querySelector(".a_p_p_MainBackground")
                    )["backgroundImage"]
                }
              end
              expect(background_image).to eq %{radial-gradient(at 40px 40px, rgb(255, 255, 255) 0px, rgb(0, 255, 255), rgb(0, 128, 0) 100%)}
              # radial-gradient(farthest-corner at 40px 40px,#fff 0,#0ff,green 100%)
              elsif x == %{https://gx8pv.csb.app}
                my_text = find %{h1},:text=>%{Welcome to the Uploader Site}
                expect(my_text).to be_truthy
              elsif x == %{https://michaelodumosu57 .github.io/SocialMediaApp}
                my_text = find %{h2},:text=>%{Post Once Upload On All Your Apps}
                expect(my_text).to be_truthy
            end
            sleep $timeouts[:project_links][Capybara.current_driver.to_sym]
            visit %{/resume}
        end
    end


  end

end


def dropdownSelectSelector
	(all %{.a_p_p_DropDownMiddle})
	.to_a
	.select! do |x|
		x.text == %{Select Item}
	end
end
def navigationPage
	(all %{*})
	.to_a
	.select! do |x|
		unless x[:class] == nil
			!(x[:class].include? %{main-navigation})
		else
			true
		end
	end
	.collect! do |x|
		x.style %{top},%{left}
	end

end

def numberParse  devObj
    dimension = devObj[:dimension]
    (dimension.split %{px}).at 0
end

def media_query devObj
	begin
		page.current_window.resize_to devObj[:width], 800
	rescue => e
		execute_script %Q{
			resizeTo(#{devObj[:width]},800)
		}
	end
end

def capybara_result_to_array devObj
	arr = []
	devObj[:target]
	.each do |x|
		arr.push x
	end
	arr
end

def opening_nav devObj
    driver = devObj[:driver].to_s
    target = devObj[:target]
    unless driver == %{chrome_billy}
        my_nav = find %{a},:text => (target.at 0)
        my_nav.click
    else
        visit target.at 1
    end
end

# dev additions

#
stagingTest
