function enableBtn(){var e=document.getElementById("btnSignUp");e.disabled=!1,e.style.color="white",e.style.background="#1e7f58"}var form=document.getElementById("signupform"),thankyou=document.getElementById("thankyou"),toprow=document.getElementById("toprow");form.onsubmit=function(e){e.preventDefault();for(var t={},n=0,o=form.length;n<o;++n){var a=form[n];a.name&&(t[a.name]=a.value)}if(""==t.email)alert("Please enter a valid email address");else{var r=new XMLHttpRequest;r.open(form.method,form.action,!0),r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.setRequestHeader("Authorization",t["g-recaptcha-response"]),r.send(JSON.stringify(t)),r.onloadend=function(){form.style.display="none",toprow.style.display="none",thankyou.style.display="block"}}};