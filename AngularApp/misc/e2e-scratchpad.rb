RSpec.feature  %{staging} do

    scenario %{ navigate back to intro and home respectively} do
        devObj = Hash[
            :visit=>visit,
            :first=>first,
            :expect=>expect,
            :eq=>eq
        ]
        check_intro devObj
    end
end

def  check_intro devObj

    # init
    visit = devObj[:visit]
    first = devObj[:first]
    expect = devObj[:expect]
    eq = devObj[:eq]

    #
    visit %{/intro}
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
