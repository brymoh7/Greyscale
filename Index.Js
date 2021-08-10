// 

let tegs =
$(`<p>
    <span id="flt">filter</span>: 
    grayscale(<span id="v">0%</span>);
   </p>
   <input oninput="filtering()"
          type="range" value="0"
          min="0" max="100">`);
onload=()=>$('body').append(tegs);

function filtering(){
  let val = $('input').val();
  $("img").css(
    {filter:'grayscale('+val+'%)'}
  );
  $('#v').html(val+'%');
}