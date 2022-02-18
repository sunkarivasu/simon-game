$(document).ready(function()
{
    var level = 0;
    var answer = [];
    var index = -1;
    $(document).keypress(function(event)
    {
        if(level==0)
        {
            $.fn.generate_random_color();
        }   
    })


    $("button").click(function()
    {
        if(level>0)
            $.fn.click_button($(this));
    });


    $.fn.generate_random_color = function()
    {
        level += 1;
        $(".big-heading").text("Level "+level);
        var random_number = Math.floor(Math.random()*4)+1;
        index=-1
        $(".b"+random_number).click();
        answer.push(random_number);
        index = 0;    
    }

    $.fn.click_button = function(btn)
    {
        var classesString = btn.attr("class");
        var button_number = classesString[1];
        // alert(button_number) 
        if(index == -1)
        {
            var audio = new Audio("sounds/s"+button_number+".mp3");
            audio.play();
            
            var classes = classesString.split(" ")
            $(".b"+button_number).css("background-color","white");
            setTimeout(function()
            {
                $(".b"+button_number).css("background-color",classes[2]);
            },30);
        }
        else if(button_number == answer[index])
        {
            var audio = new Audio("sounds/s"+button_number+".mp3");
            audio.play();
            
            var classes = classesString.split(" ")
            $(".b"+button_number).css("background-color","white");
            setTimeout(function()
            {
                $(".b"+button_number).css("background-color",classes[2]);
            },30);
            if(index==answer.length-1)
            {
                setTimeout(function()
                {
                    $.fn.generate_random_color();
                },2000);
                
            }
            else
            {
                index += 1;
            }
        }
        else
        {
            // alert("hi"+button_number+" "+answer[index])
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();

            $("body").addClass("wrong");
            setTimeout(function()
            {
                $("body").removeClass("wrong");
            },100);
            answer=[];
            index=0;
            level=0;
            $(".big-heading").text("Game Over, Press any Key To Restart")
        }

    }

    
})