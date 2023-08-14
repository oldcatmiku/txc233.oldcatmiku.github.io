var all = 35
tips = new Array(all);
//条目内容
tips[0] = '请看我们的黑历史！';
tips[1] = '小柴：没有任何的更新！';
tips[2] = '老猫进军js领域！';
tips[3] = '小黑只会摸鱼';
tips[4] = 'CSS代码缺失分号！';
tips[5] = '自己看不懂的代码必出错';
tips[6] = '> ERROR!';
tips[7] = '哦买路ki';
tips[8] = '老猫：请叫我前端工程师';
tips[9] = '出现乱码：Uncaught ReferenceError:';
tips[10] = '图片未被加载！';
tips[11] = '自从德国从二战胜利以来...';
tips[12] = '你就不能把它写进CSS吗？！';
tips[13] = 'C#的传说';
tips[14] = 'doki doki';
tips[15] = '你要“量子可控监狱”，还是“小黑的农场”？';
tips[16] = '狗蛋儿传奇卖出了114514份！';
tips[17] = '小黑的农场里面没有菜';
tips[18] = '现在已经完全适配手机！';
tips[19] = '∩M$1';
tips[20] = '&lt;s&gt还是&lt;del&gt？&lt;b&gt还是&lt;strong&gt？';
tips[21] = '页主队团CXT'
tips[22] = '老猫会用js！'
tips[23] = 'The suber more sers mers'
tips[24] = '为什么不试试BNPsoft？'
tips[25] = '<del>商业胡吹：</del> BNPsoft 太好用辣'
tips[26] = '老猫：都给我捐助哇呜哇！！'
tips[27] = '<del>热铝盒服务器又抽风了</del>'
tips[28] = '.php 比 .html 好用！'
tips[29] = '真相：页面加载太慢的原因是......'
tips[30] = 'ask sb doing sth.'
tips[31] = 'int 数据溢出！'
tips[32] = '只有 ' + (100/all)/2+ '% 的可能抽到这条消息！'
tips[33] = '谨 防 内 鬼 举 报 ！'
tips[34] = 'put_file_content = 10TB数据'
tips[35] = '“这不是正确的解决方案”'
index = Math.floor(Math.random() * tips.length);
var radm
radm = Math.floor(Math.random() * 2);
if (radm == 1)
{
fetch('https://v1.hitokoto.cn?c=i&encode=json')
	.then(response => response.json())
	.then(data => {
		const hitokoto = document.getElementById('hitokoto_text')
		hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
		hitokoto.innerText = data.hitokoto + '\n——' + data.from_who + '《' + data.from + '》'
	})
	.catch(console.error)
}
else{//<audio src="/vidio/ygsh.mp3" controls="controls">您的浏览器不支持 audio 标签。</audio>
document.getElementById("title").innerHTML = tips[index];}
;

/*
###########控制台测试代码##############

var all = 32
tips = new Array(all);
//条目内容
tips[0] = '请看我们的黑历史！';
tips[1] = '小柴：没有任何的更新！';
tips[2] = '老猫进军js领域！';
tips[3] = '小黑只会摸鱼';
tips[4] = 'CSS代码缺失分号！';
tips[5] = '自己看不懂的代码必出错';
tips[6] = '> ERROR!';
tips[7] = '哦买路ki';
tips[8] = '老猫：请叫我前端工程师';
tips[9] = '出现乱码：Uncaught ReferenceError:';
tips[10] = '图片未被加载！';
tips[11] = '自从德国从二战胜利以来...';
tips[12] = '你就不能把它写进CSS吗？！';
tips[13] = 'C#的传说';
tips[14] = 'doki doki';
tips[15] = '你要“量子可控监狱”，还是“小黑的农场”？';
tips[16] = '狗蛋儿传奇卖出了114514份！';
tips[17] = '小黑的农场里面没有菜';
tips[18] = '现在已经完全适配手机！';
tips[19] = '∩M$1';
tips[20] = '&lt;s&gt还是&lt;del&gt？&lt;b&gt还是&lt;strong&gt？';
tips[21] = '页主队团CXT'
tips[22] = '老猫会用js！'
tips[23] = 'The suber more sers mers'
tips[24] = '为什么不试试BNPsoft？'
tips[25] = '<del>商业胡吹：</del> BNPsoft 太好用辣'
tips[26] = '老猫：都给我捐助哇呜哇！！'
tips[27] = '<del>热铝盒服务器又抽风了</del>'
tips[28] = '.php 比 .html 好用！'
tips[29] = '真相：页面加载太慢的原因是......'
tips[30] = 'ask sb doing sth.'
tips[31] = 'int 数据溢出！'
tips[32] = '只有 ' + (100/all)/2+ '% 的可能抽到这条消息！'
index = Math.floor(Math.random() * tips.length);
document.getElementById("title").innerHTML = tips[index];
;

*/