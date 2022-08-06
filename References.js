document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });