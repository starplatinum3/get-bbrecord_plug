# 爬虫插件

### 图文文档
文档：去这个网站 自动开始爬取.note
链接：http://note.youdao.com/noteshare?id=1bf432ec48389bd3a12e7b2e69f8cd02&sub=7506552EBAFF4E098A55963DF34D1DC6

插件安装
gitlab  https://git.doctorz.cn/starplatinumora/get-bbrecord_plug.git (fetch)
 https://git.doctorz.cn/starplatinumora/get-bbrecord_plug.git
插件的链接
文档：插件.note  安装的方法
链接：http://note.youdao.com/noteshare?id=42480deaf3f5c61c3e6a5cbfdec96865&sub=6887B99401ED40FD9E42F9DE90F67399

去这个网站 自动开始爬取
职位信息-国家大学生就业服务平台 (ncss.cn)
下面的 页数可以点击

echo '/mcm2022-czyzjhsjc/*' >> .git/info/sparse-checkout


最大 的  boss 详细消息的 json的 id
def get_max_num_boss_idx(dir_name=rf'D:\download'):
    D:\proj\python\my_util_py_pub\read_job.py

最多好像一下子只能点到 3k左右，后面其实还有，但是他是从3k开始，慢慢的点击往后的箭头，去拿到，不能直接拿到4k页面的数据

def get_jobLinkLst_all_write():
获取所有的 jobLink 写入json  （ 这步操作是手动的，因为我觉得也没有把他自动化的必要，因为爬取职业平台需要好多时间，这里手动一下用到时间和爬虫时间相比是很少的，而且每爬取一个平台都要相应的换一个数据，所以自动化难做，且成本高，而且效果不好）
这个json 的列表，写出一个js文件，放在插件代码里



D:\proj\js\get-bbrecord_plug\manifest.json
让他在前面加载，防止这个列表没有被content.js 读到


重新加载一下插件，最好是关掉浏览器重启

D:\proj\python\my_util_py_pub\small_job.py
去拿到joblink的第一个， 假设是
https://www.ncss.cn/student/jobs/neCaD32ZjMwD4WgMi344p/detail.html?idx=0

贴在浏览器上，就自动开始爬虫了，由于浏览器本身就是多进程，可以多进程爬取
可以用这个获取一个后面一点的链接，比如
D:\proj\python\my_util_py_pub\small_job.py
https://www.ncss.cn/student/jobs/neCaD32ZjMwD4WgMi344p/detail.html?idx=50000
这是第  5w个，根据idx可以知道，把这个链接也贴到浏览器上，这两个就一起在爬虫了
根据电脑的配置，可以尝试多个爬虫，我的电脑基本跑2-3个就有点卡了。我用实验室的电脑同时跑5-6应该没问题，也没被封锁ip，不过最好是少点，安全点。浏览器基本可以放在后台运行，只是有时候可能会跳出来，点击最小化，跳出来的可能性会降低
如果开个多个链接一起爬虫，有可能后开的那些在爬虫，前面开的那些爬到一半不爬了，我的电脑好像只能同时有2-3个一起爬

D:\proj\python\my_util_py_pub\list24-2.py
def get_detail_max_values():
    """
    用这个函数查看24 detail爬取的过程，爬取到哪里了
    {'6000-8000': 7206, '14000-16000': 15999, '16000-18000': 17700, '24000-26000': 25999,
     '26000-28000': 26702, '28000-30000': 28140, '34000-36000': 35999, '36000-38000': 37999, '38000-40000': 38879, '40000-42000': 41999, '42000-44000': 43956, 
     '44000-46000': 45999, '46000-48000': 47999, '48000-50000': 49999, '50000-52000': 51999, '52000-54000': 53734, '60000-62000': 61098, '64000-66000': 65999, 
     '66000-68000': 67999, '68000-70000': 69050}、

比如这个列表，说明他到9295了，因为这里可以配置每多少个来计算一个区间的最大值，比如每2000个，
[9295, 19290, 29974, 51999, 53999, 55324, 61795, 65999, 67999, 69999]
     比如0- 2k的最大是1k5，说明0-2k的进度是1k5，因为之前的detail爬虫配置是多个进程一起爬的
     那么2k-4k也是一个爬虫，他的进度比如是3k6，
     如果之前我们设置的两个爬虫进程之间的距离太大，比如是1w，现在看进度，假设是
     0-1w 是3k，1w-2w，1w4k。而且进程数可以考虑增多，那么就可以开个5k开始的新进程
     用 D:\proj\python\my_util_py_pub\small_job.py  找到5k的链接，贴到浏览器上
     not_end_index_list


"""

D:\proj\python\my_util_py_pub\jobLinkJoin.py
detail_lst=get_detail_lst(detail_dir=rf"D:\proj\job\download")，这里的detail的那些json的路径需要配置
用这个把detail 和 之前列表的信息结合起来
生成一个大的json，他的路径是在代码里配置的
out_file_name=rf"D:\proj\job\res_list_24_all_{now_time_str}.json"
还会输出没有找到的link，因为可能detail还没有爬取完全
out_file_name_not_found_list=rf"D:\proj\job\not_found_list_{now_time_str}.json"

生成的大json可以导入

