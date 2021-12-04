$(document).ready(function(){
    $('#submit-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                
                
            },
            place:{
                required:true,
                
            },
            gender:{
                required:true
            },
            mail:{
                required:true,
                email:true
            },
            contact:{
                required:true,
                
            },
            gender:{
                required:true
            },
            quali:{
                required:true
            },
            college:{
                required:true
            },
            year:{
                required:true,
                length:4
            },
            status:{
                required:true
            },
            about:{
                required:true
            },
            sps:{
                required:true
            },
            day:{
                required:true
            },
            yt:{
                required:true
            },
            check:{
                required:true
            }
            

        }
        
    })
})