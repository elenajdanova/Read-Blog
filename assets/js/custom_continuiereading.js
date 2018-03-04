var button = document.getElementById('btt')
	st1 = document.getElementById('st1')
	st2 = document.getElementById('st2')
	st3 = document.getElementById('st3')
    button.addEventListener('click',hideshow,false);

    function hideshow() {
        document.getElementById('hidden-div').style.display = 'block'; 
        button.style.display = 'none'
        st1.style.display = 'none'
        st2.style.display = 'none'
        st3.style.display = 'none'
    }   