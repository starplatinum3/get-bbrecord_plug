# getBBRecord_plug

#### 介绍
获取 bb 做题记录的插件, 判断题是可以的,选择应该也行. 填空题还没怎么写


码云地址
https://gitee.com/starplatinum111/get-bbrecord_plug/tree/master


获得bb上我们自己做过题目的我们的选择（不是可以凭空知道答案，其实截个图也是一样，只是截图不是文本，不能查找。这只是一个简单的功能），
也标注了自己选了什么，把它们下载为一个文本文件，方便自己复习

还有就是不要觉得这个是无中生有  这个是你做了题目 然后把你做的记录下来 不是直接获得答案奥  这点我觉得我要说清楚

## 如何使用
这是一个插件,载入浏览器,按照按钮使用就好了

安装插件的方法，并非此插件，装插件方法都类似，供参考

文档：插件.note
链接：http://note.youdao.com/noteshare?id=&sub=6887B99401ED40FD9E42F9DE90F67399


getBBScore 是在做完题之后的获得成绩用的，可以直接下载一个有题目有成绩的txt下来
形式大概如此

```
题号: 2
分数: 得 1 分，满分 1 分
问题: 2.The passage suggests that __________.
你的答案:
1、 A) it’s now unlikely to see a Frenchman taking a walk by the river
2、 B) in pursuing material gains the French are suffering losses elsewhere    :你选择了他
3、 C) the French are fed up with the smell of freshly picked apples
4、 D) great changes have occurred in the style of all Frenchmen
```
git remote add origin https://git.doctorz.cn/starplatinumora/get-bbrecord_plug.git
git remote add gitlab https://git.doctorz.cn/starplatinumora/get-bbrecord_plug.git

update：

2021年8月23日11:50:54

可以在mooc平台使用；

建模 
使用bootstrap css 样式 比较好看；


个人认为重大更新
```
putAns 
  // 2021年4月8日  增加了.trim() 这样可以去掉回车什么的
        // 大部分情况下 可以相等了
        if (questionsFromObj[i].queText.trim() === queText.trim()) {
            return i;
        }
```

```
putAns  大概率可以使用，还没有多次测试，只测试了一次。
按逻辑来说，题目顺序不一样，答案顺序不一样的，已经可以填上了。但是还没做过很多测试
方法就是把json文件拖到那个插件上，然后按putans按钮
```

这是另外一个项目的介绍 ,因为我插件还没写好,这个项目是放了一些代码,复制了可以直接贴到console来用
文档：bb自己选的答案记录.note
链接：http://note.youdao.com/noteshare?id=f8ed257a7787703d7c4b443fd18e6ec8&sub=B947A523FB974CCAA15C9F7B34EB126E


#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
