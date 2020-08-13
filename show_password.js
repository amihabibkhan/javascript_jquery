 // password field 
 
 <label>পাসওয়ার্ড</label>
 <input id="password_field" class="form-control" type="password" name="password"> 
 
 
 // show password event handler element
 <input id="show" type="checkbox" onchange="showPass()">
 <label for="show">পাসওয়ার্ড দেখুন!</label>
 
 
 // script for show password
<script>
    function showPass() {
        var pass_field = document.getElementById('password_field')
        var current_type = pass_field.getAttribute('type')
        if(current_type == 'password'){
            pass_field.setAttribute('type', 'text')
        }else{
            pass_field.setAttribute('type', 'password')
        }
    }
</script>
