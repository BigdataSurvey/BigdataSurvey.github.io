setInterval(() =&gt; {
  let create_time = Math.round(new Date('2019-04-17 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h){
    return h&gt;9?h:'0'+h;
  }
  if (second &gt;= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second &gt;= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second &gt;= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second &gt;= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second &gt; 0) {
    time[4] = nol(second);
  }
  if ((Number(time[2])&lt;22) &amp;&amp; (Number(time[2])&gt;7)){
    currentTimeHtml ="<img class="boardsign" src="https://img.shields.io/badge/神奇的变量-营业中-6adea8?style=social&amp;logo=cakephp" title="距离百年老店也就差不到一百年~"><div id="runtime">" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  else{
    currentTimeHtml ="<img class="boardsign" src="https://img.shields.io/badge/神奇的变量-打烊了-6adea8?style=social&amp;logo=coffeescript" title="这个点了应该去睡觉啦，熬夜对身体不好哦"><div id="runtime">" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);