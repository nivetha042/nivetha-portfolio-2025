document.addEventListener('DOMContentLoaded', () => {
  const btn1st = document.getElementById('toggle1st');
  const btn3rd = document.getElementById('toggle3rd');
  const about1st = document.getElementById('about1st');
  const about3rd = document.getElementById('about3rd');
  btn1st.addEventListener('click', () => {
    btn1st.classList.add('active');
    btn3rd.classList.remove('active');
    about1st.classList.add('active');
    about3rd.classList.remove('active');
  });
  btn3rd.addEventListener('click', () => {
    btn3rd.classList.add('active');
    btn1st.classList.remove('active');
    about3rd.classList.add('active');
    about1st.classList.remove('active');
  });
});