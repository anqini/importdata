# content = "普林斯顿大学（Princeton University），简称普林斯顿（Princeton），\
# 是世界著名私立研究型大学，位于美国新泽西州的普林斯顿市，是美国大学协会的14个始创院校之一，\
# 也是著名的常春藤八盟校的成员。基督教教会曙光长老会于1746年在新泽西州伊丽莎白镇创立该校，\
# 是美国殖民时期第四所成立的高等院校，当时名为“新泽西学院”，1747年迁至新泽西州，\
# 1756年迁至风景优美的普林斯顿市（位于费城和纽约之间），并在1896年正式改名为“普林斯顿大学”。"
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format("普林斯顿大学", content)
# print(query)
# content = '哈佛大学（Harvard University），简称“哈佛”，\
#     坐落于美国马萨诸塞州波士顿都市区剑桥市，是一所享誉世界的私立研究型大学，\
#     是著名的常春藤盟校成员。截至2018年10月，哈佛大学共培养了8位美利坚合众国总统，\
#     而哈佛的校友、教授及研究人员中共走出了158位诺贝尔奖得主（世界第一）、18位菲尔兹奖得主（世界第一）\
#     14位图灵奖得主（世界第四），其在文学、医学、法学、商学等多个领域拥有崇高的学术地位及广泛的影响力，\
#     被公认为是当今世界最顶尖的高等教育机构之一'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format("哈佛大学", content)
# print(query)
# content = '芝加哥大学（The University of Chicago），简称“芝大”（UChicago），\
# 位于美国国际金融中心芝加哥，是世界著名私立研究型大学、常年位列各个大学排行榜世界前十。\
# 这里诞生了“芝加哥经济学派”（Chicago School of Economics）等以人文社科为主的众多芝加哥学派，\
# 约40%的诺贝尔经济学奖得主与芝大相关，是世界经济学、法学、社会学等最重要的研究教学中心之一。\
# 而从曼哈顿计划起大批科学家汇集于此，在“原子能之父”费米的领导下建立了世界上第一台核反应堆（“芝加哥一号堆”，Chicago Pile 1）、\
# 成功开启人类原子能时代 [15]  ，并创立了美国第一所国家实验室阿贡国家实验室和之后著名的费米实验室，\
# 进而奠定了芝大在自然科学界的重要地位。'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('芝加哥大学', content)
# print(query)
# content = "斯坦福大学（Stanford University），全名小利兰·斯坦福大学（Leland Stanford Junior University），\
# 简称“斯坦福（Stanford）”，位于美国加州旧金山湾区南部的帕罗奥多市（Palo Alto）境内，\
# 临近世界著名高科技园区硅谷，是世界著名的私立研究型大学，环太平洋大学联盟成员。\
# 斯坦福大学占地约33平方公里（8180英亩），是美国占地面积第六大的大学。"
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('斯坦福大学', content)
# print(query)
# content = '哥伦比亚大学（Columbia University），正式名称为纽约市哥伦比亚大学（Columbia University in the City of New York），\
# 简称为哥大，是一所位于美国纽约曼哈顿的世界顶级私立研究型大学，为美国大学协会（AAU）的十四所创始院校之一，常春藤盟校之一。\
# 哥伦比亚大学于1754年根据英国国王乔治二世颁布的《国王宪章》而成立，最初名为国王学院，\
# 1896年正式更名为哥伦比亚大学（1784-1896为哥伦比亚学院）并迁到目前所在的晨边高地校园。'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('哥伦比亚大学', content)
# print(query)
# content = '布朗大学（Brown University）是一所世界著名的顶级私立研究型大学，全美第七古老的大学，\
# 遐迩闻名的常春藤联盟成员校之一，1764年创建之初，学校的校名叫做罗德岛学院，坐落在美国罗德岛州的首府普罗维登斯市。\
# 布朗大学入学竞争极为激烈，本科生录取率仅为9%，是全美录取难度最高的大学之一。\
# 该校最大特征之一即为“小而精”，在当今大学人数不断增长的环境下，\
# 布朗大学依旧保持着严格的招生制度和极高的入学门槛，师生比约为1：7，\
# 堪称小型顶尖私立研究型大学，本科生6,182人，研究生仅1,974人，全职教师736人，\
# 但在如此之少的教师队伍中，就有七位诺贝尔奖得主，还有1位校友也曾获得诺贝尔奖。'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('布朗大学', content)
# print(query)
# content = '康奈尔大学（Cornell University），位于美国纽约州伊萨卡，\
# 是一所世界顶级私立研究型大学（另有两个校区位于纽约市和卡塔尔教育城），\
# 为美国大学协会的十四个创始院校之一，以及著名的体育赛事联盟常春藤盟校的八个成员之一。\
# 康奈尔大学由埃兹拉·康奈尔和安德鲁·迪克森·怀特于1865年建立，\
# 是常春藤八盟校中唯一创建于美国独立战争之后的新生力量，其办学理念影响了整个美国高等教育，\
# 办学规模为当时全美高校之最。康奈尔大学的立校之本是任何人都有获得教育的平等权利，\
# 是常春藤盟校中第一所实行性别平等的男女合校大学，在招生录取上最早实行不计贵族身份，不分信仰和种族，\
# 并以创建学科齐全、包罗万象的新型综合性大学为建校宗旨'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('康奈尔大学', content)
# print(query)
# content = '耶鲁大学（Yale University），简称“耶鲁（Yale）”，坐落于美国康涅狄格州纽黑文，\
# 是一所世界著名的私立研究型大学，全美第三古老的高等学府。耶鲁大学是美国大学协会的14所创始院校之一，\
# 也是著名的常春藤盟校成员.\
# 耶鲁大学最初由康涅狄格州公理会教友于1701年创立，1716年迁至康涅狄格州的纽黑文（New Haven）。\
# 耶鲁大学作为美国最具影响力的私立大学之一，耶鲁大学是美国历史上建立的第三所大学，其本科学院与哈佛大学、\
# 普林斯顿大学本科生院齐名，历年来共同角逐美国大学本科生院美国前三名的位置，\
# 位列2016-17年US News美国大学本科排名第3（与芝加哥大学并列）。\
# 耶鲁大学共走出了5位美国总统、19位美国最高法院大法官、16位亿万富翁等等。'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('耶鲁大学', content)
# print(query)
# content = '加州大学伯克利分校（University of California, Berkeley），\
# 简称伯克利，位于美国旧金山湾区伯克利市，是世界著名公立研究型大学，环太平洋大学联盟成员，\
# 在学术界享有盛誉，位列2018-19年USNews世界大学排名世界第4、世界大学学术排名世界第5。'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('加州大学伯克利分校', content)
# print(query)
# content = '加州大学洛杉矶分校（University of California, Los Angeles）简称UCLA，\
# 位于美国洛杉矶市，是世界著名的公立研究型大学，环太平洋大学联盟成员。\
# UCLA在2018-19Wall Street Journal、Times Higher Education以及US News多个排名中均高居美国公立大学第一，\
# 在2018QS毕业生就业力排名中位列世界第二，在2018福布斯最具价值大学排名中位列全美第一 ，\
# 是美国申请人数最多的大学。UCLA在2018世界大学学术排名ARWU中位列世界第11；在2019泰晤士高等教育世界大学排名中位列世界第17，\
# 在2019USNews世界大学排名中位列世界第13,在2019QS世界大学排名中位列第32，\
# 被誉为美国商业金融、高科技产业、电影艺术等人才的摇篮'
# query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('加州大学洛杉矶分校', content)
# print(query)
content = '达特茅斯学院（Dartmouth College）成立于1769年，是美国历史最悠久的世界顶尖学府，也是闻名遐迩的私立八大常春藤联盟之一。\
坐落于新罕布什尔州的汉诺佛（Hanover）小镇。依照利扎维洛克牧师当初成立这个学校的目的，\
是为了培养当地印第安部落的年轻人和年轻白人。'
query = "db.websites.findOneAndUpdate({{title: \"{}\"}}, {{$set: {{description: \"{}\"}}}})".format('达特茅斯学院', content)
print(query)
