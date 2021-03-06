-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-06-03 10:08:41
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `headlines` varchar(30) NOT NULL,
  `addtime` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `headlines`, `addtime`) VALUES
(1, '【产业】中国小蚁科技和 IMAX 一同作为谷歌供应商', 'img/yi.jpg', 'Google Jump（是由谷歌联合运动相机厂商 GoPro 联合开发的用于拍摄VR视频的相机），一个360全景摄像系统以及软件处理平台在此次谷歌大会上宣布增加 IMAX 和小蚁科技作为相机制造商。\nClay Bavor，谷歌的 VR 部老大，在大会上透露了谷歌要为 Jump 平台做进一步添加。“好莱坞向我们提出电影级别的 Jump 摄像机，我们就准备给他们做一个，和 IMAX 一起。”\n\nIMAX 是用他们数十年的经验、相机设计、镜片技术、感应器和其他技术来加入 Jump，而来自中国的小蚁科技，则是携带自研的4k运动相机来参与。小蚁的这款运动相机和谷歌的拥有16个 GoPr o摄像头的拍摄装备 Odyssey 类似。而小蚁的360全景摄像系统则会在今年下半年面市。\n目前小蚁的4k运动相机售价249美刀，是 GoPro 相似款产品价格的一半。有兴趣？戳一戳这里可以去小蚁官网一窥究竟。', '推荐', '2016-06-03'),
(2, '采访库克：Apple Pay和Apple Store将进入印度', 'img/pay.jpg', 'IT之家讯5月21日消息，苹果CEO 蒂姆.库克正在印度访问，并接受了印度电视台NDTV的专访，在采访中库克重点谈到了苹果将在印度市场深入布局，引入苹果零售店（Apple Store），与印度运营商进一步合作并准备再印度推出Apple Pay移动支付业务。\n\n库克表示，目前正在与印度政府谈判，协商在印度开设Apple Store门店，并于晚些时候在印度推出Apple Pay服务。几天前，苹果宣布将在印度开设全新的应用加速器和简历专门的地图研发中心。\n印度的收入偏低，价格相对昂贵的iPhone能否竞争的过廉价Android是一个重大问题，库克表示苹果不会在印度推出廉价iPhone。对于印度仅售苹果官翻iPhone的规定，库克表示希望印度能够放开这一禁令，苹果官翻手机仍然享受保修，和新手机一样。', '推荐', '2016-06-03'),
(3, '国台办:只有坚持九二共识 才与陆委会继续沟通', 'img/guo.jpg', '针对民进党已经在台湾上台执政，国台办与陆委会联系沟通机制是否还能继续运作的问题，国台办发言人马晓光２１日应询表示，只有确认坚持“九二共识”这一体现一个中国原则的共同政治基础，两部门联系沟通机制才能得以延续。\n马晓光表示，２０１４年２月，国台办与陆委会负责人在南京见面，决定在“九二共识”政治基础上建立两部门常态化联系沟通机制。两年多来，两部门积极互动，举行５次负责人工作会面，建立起两岸热线，保持密切联系沟通，妥善处理了许多复杂敏感问题，受到两岸各界的普遍认可。两部门联系沟通机制的运作，有利于两岸双方及时沟通情况、避免误判、管控分歧，也有利于增进了解、累积互信，让两岸关系中的一些“不可能”成为现实。', '推荐', '2016-06-03'),
(4, '富士康接盘诺基亚手机业务 能否玩好这把双刃剑？', 'img/fu.jpg', '据英国《金融时报》消息，微软已同意把从诺基亚收购的手机部门作价3.5亿美元出售给富士康。这意味着，诺基亚品牌将在沉寂多年后，重回智能手机市场。富士康接盘诺基亚手机业务，可以为自身代工品牌赋予品牌附加值，但同时，也会成为其大客户苹果的潜在竞争对手，苹果未来还会继续选择富士康做代工吗？富士康能否玩好这把双刃剑，耐人寻味。\n诺基亚风雨飘摇两度易主\n忆往昔峥嵘岁月，一度占据全球手机市场份额40%，曾经市值高达一千多亿美元的诺基亚，如今以3.5亿美元卖给富士康，令人唏嘘，为何走到如此境地？\n长期处于行业霸主地位，让诺基亚获得了足够多的荣誉和关注，同时，也让诺基亚产生了懈怠、轻敌的情绪，在销量一路披荆斩棘登高峰的过程中，逐渐失去了自我，失去了创新的动力。很多重大项目在内部无法快速推进，这严重影响了它的决策效率和步伐。\n随着科技日新月异的发展，人们对信息的需求量越来越大，手机已经不再单纯的作为通讯工具，苹果、三星等智能机应运而生，很好的满足了人们拿着手机就可以浏览网页咨询、看电影、读小说、玩游戏的需求。\n而诺基亚并没有及时乘坐移动互联网的大船，面对市场变化没有做出正确判断，它的产品一直停留在如何解决更好地通讯的问题，而没有更多地思考消费者要什么。诺基亚的创新也基本是在外观上的改变，而在系统、功能上变化并不突出。\n在功能手机时代，诺基亚手机结实耐用、通讯信号好，无疑可以很受用户追捧和欢迎。但是，随着时代变迁，当用户更多的关注操作系统、功能和应用时，诺基亚的塞班系统注定只能被嫌弃。', '推荐', '2016-06-03'),
(5, '【产业】中国小蚁科技和 IMAX 一同作为谷歌供应商', 'img/yi.jpg', 'Google Jump（是由谷歌联合运动相机厂商 GoPro 联合开发的用于拍摄VR视频的相机），一个360全景摄像系统以及软件处理平台在此次谷歌大会上宣布增加 IMAX 和小蚁科技作为相机制造商。\nClay Bavor，谷歌的 VR 部老大，在大会上透露了谷歌要为 Jump 平台做进一步添加。“好莱坞向我们提出电影级别的 Jump 摄像机，我们就准备给他们做一个，和 IMAX 一起。”\n\nIMAX 是用他们数十年的经验、相机设计、镜片技术、感应器和其他技术来加入 Jump，而来自中国的小蚁科技，则是携带自研的4k运动相机来参与。小蚁的这款运动相机和谷歌的拥有16个 GoPr o摄像头的拍摄装备 Odyssey 类似。而小蚁的360全景摄像系统则会在今年下半年面市。\n目前小蚁的4k运动相机售价249美刀，是 GoPro 相似款产品价格的一半。有兴趣？戳一戳这里可以去小蚁官网一窥究竟。', '推荐', '2016-06-03'),
(6, '采访库克：Apple Pay和Apple Store将进入印度', 'img/pay.jpg', 'IT之家讯5月21日消息，苹果CEO 蒂姆.库克正在印度访问，并接受了印度电视台NDTV的专访，在采访中库克重点谈到了苹果将在印度市场深入布局，引入苹果零售店（Apple Store），与印度运营商进一步合作并准备再印度推出Apple Pay移动支付业务。\n\n库克表示，目前正在与印度政府谈判，协商在印度开设Apple Store门店，并于晚些时候在印度推出Apple Pay服务。几天前，苹果宣布将在印度开设全新的应用加速器和简历专门的地图研发中心。\n印度的收入偏低，价格相对昂贵的iPhone能否竞争的过廉价Android是一个重大问题，库克表示苹果不会在印度推出廉价iPhone。对于印度仅售苹果官翻iPhone的规定，库克表示希望印度能够放开这一禁令，苹果官翻手机仍然享受保修，和新手机一样。', '推荐', '2016-06-03'),
(7, '国台办:只有坚持九二共识 才与陆委会继续沟通', 'img/guo.jpg', '针对民进党已经在台湾上台执政，国台办与陆委会联系沟通机制是否还能继续运作的问题，国台办发言人马晓光２１日应询表示，只有确认坚持“九二共识”这一体现一个中国原则的共同政治基础，两部门联系沟通机制才能得以延续。\n马晓光表示，２０１４年２月，国台办与陆委会负责人在南京见面，决定在“九二共识”政治基础上建立两部门常态化联系沟通机制。两年多来，两部门积极互动，举行５次负责人工作会面，建立起两岸热线，保持密切联系沟通，妥善处理了许多复杂敏感问题，受到两岸各界的普遍认可。两部门联系沟通机制的运作，有利于两岸双方及时沟通情况、避免误判、管控分歧，也有利于增进了解、累积互信，让两岸关系中的一些“不可能”成为现实。', '社会', '2016-06-03'),
(8, '【产业】中国小蚁科技和 IMAX 一同作为谷歌供应商', 'img/yi.jpg', 'Google Jump（是由谷歌联合运动相机厂商 GoPro 联合开发的用于拍摄VR视频的相机），一个360全景摄像系统以及软件处理平台在此次谷歌大会上宣布增加 IMAX 和小蚁科技作为相机制造商。\nClay Bavor，谷歌的 VR 部老大，在大会上透露了谷歌要为 Jump 平台做进一步添加。“好莱坞向我们提出电影级别的 Jump 摄像机，我们就准备给他们做一个，和 IMAX 一起。”\n\nIMAX 是用他们数十年的经验、相机设计、镜片技术、感应器和其他技术来加入 Jump，而来自中国的小蚁科技，则是携带自研的4k运动相机来参与。小蚁的这款运动相机和谷歌的拥有16个 GoPr o摄像头的拍摄装备 Odyssey 类似。而小蚁的360全景摄像系统则会在今年下半年面市。\n目前小蚁的4k运动相机售价249美刀，是 GoPro 相似款产品价格的一半。有兴趣？戳一戳这里可以去小蚁官网一窥究竟。', '社会', '2016-06-03'),
(10, '采访库克：Apple Pay和Apple Store将进入印度', 'img/pay.jpg', 'IT之家讯5月21日消息，苹果CEO 蒂姆.库克正在印度访问，并接受了印度电视台NDTV的专访，在采访中库克重点谈到了苹果将在印度市场深入布局，引入苹果零售店（Apple Store），与印度运营商进一步合作并准备再印度推出Apple Pay移动支付业务。\n\n库克表示，目前正在与印度政府谈判，协商在印度开设Apple Store门店，并于晚些时候在印度推出Apple Pay服务。几天前，苹果宣布将在印度开设全新的应用加速器和简历专门的地图研发中心。\n印度的收入偏低，价格相对昂贵的iPhone能否竞争的过廉价Android是一个重大问题，库克表示苹果不会在印度推出廉价iPhone。对于印度仅售苹果官翻iPhone的规定，库克表示希望印度能够放开这一禁令，苹果官翻手机仍然享受保修，和新手机一样。', '社会', '2016-06-03'),
(11, '2016谷歌IO大会：AI武装下的一堆旧东西能否新生？', 'img/google.jpg', 'AI武装下的一堆旧东西\n譬如，Google Assistant（谷歌助理）是Google Now的进化版，它以语音识别和语义分析为基础，加入更多人工智能属性后，变得更加强大和具备普适性，面向未来为切入更多使用场景。\n又譬如，Google Home（硬件表现形式是一款音箱）是谷歌球状音箱Nexus Q的进化版，它比4年前谷歌发布的Nexus Q这个圆乎乎的球状设备在家庭多媒体播放外多了很多功能--例如控制电视盒子、灯光、恒温器等，也集成了Google Assistant--变得更智能和人工智能。\n再譬如，Allo和Duo，一个文字一个视频聊天工具，可视为已被谷歌放弃的Google Talk的进化版，只不过相比Google Talk，它们也更智能、更人性化，例如能根据主人的使用习惯预判断给出一些智能回复。\n新版本手机操作系统Android N、手表操作系统Android Wear 2.0和编程工具Android Studio 2.2就不用说了，例行的更新。\n真正新的东西，是一个名叫Daydream的号称VR软件平台。用谷歌新CEO皮查伊的话说，谷歌希望用它把VR设备、APP内容串联起来，与安卓系统无缝契合（谷歌VR部门负责人稍早前放言称：跟Android一样，谷歌要打造一个VR生态系统）。\n总之，谷歌此次大会并没有什么亮眼的产品，软的硬的都没有，无人驾驶也没有被当做重头戏去谈（当然也可能是无人汽车这些业务归到了Alphabet总公司）。VR生态平台Daydream或许是一个新东西，但考虑到VR的发展现状以及不明确的前景，充其量也是一个非常早期试验品。\n但是透过现象看本质，你会发现谷歌此次发布会把所有亮点都放在了人工智能上，譬如其中的谷歌助手，就嵌入了多款产品和场景。在谷歌看来，更智能、更自然地连接人与信息、人与服务、人与知识，比发布一个什么“谷歌眼镜”的或许更重要。', '社会', '2016-06-03'),
(12, '中科招商：顺丰们，你用了我一个壳，还有十几个等你', 'img/shun.jpg', '在申通快递、圆通速递借壳上市之后，顺丰也将通过借壳鼎泰新材（002352）登陆A股。\n今天中午听到这个消息之后，相信不少鼎泰新材的股东已经在心里默默地数涨停板了，晚上睡觉都要乐开花了。\n不过，读懂君要告诉你的是，除了顺丰和那些让人嫉妒的幸运者，还有一个默默潜伏、默默等待很久的新三板公司正在欣喜若狂——那就是去年股灾期间为国接盘的中科招商（832168.OC）。\n因为中科招商旗下全资子公司中科汇通持有鼎泰新材1276.48万股，占总股本的10.93%，当前市值3.54亿元。如果顺丰借壳顺利完成，看看世纪游轮、看看七喜控股，不出意外，中科招商很可能将在鼎泰新材上赚得数亿元的利润。\n你以为到这里故事就结束了吗？错，事实上，除了鼎泰新材已经成为壳公司，中科招商还有十多个潜在的可能被借壳的公司。\n这恐怕得从2015年的股灾开始说起，那些历历在目的痛苦回忆就不提了，但中科招商就是在这个时候声名鹊起的。\n2015年8月，A股市场因为股灾爆发流动性危机，中科招商在国家队的号召下开始逆势举牌，仅仅1个多月的时间，成功举牌了16家A股上市公司。读懂君的数据显示，这些公司的市值大多在30-50亿元，同时主营业务也并不是特别突出。中科招商的大举举牌究竟是囤壳策略还是为了战略投资？这恐怕只有他们的大老板才知道了。', '社会', '2016-06-03'),
(13, '2016谷歌IO大会：AI武装下的一堆旧东西能否新生？', 'img/google.jpg', 'AI武装下的一堆旧东西\n譬如，Google Assistant（谷歌助理）是Google Now的进化版，它以语音识别和语义分析为基础，加入更多人工智能属性后，变得更加强大和具备普适性，面向未来为切入更多使用场景。\n又譬如，Google Home（硬件表现形式是一款音箱）是谷歌球状音箱Nexus Q的进化版，它比4年前谷歌发布的Nexus Q这个圆乎乎的球状设备在家庭多媒体播放外多了很多功能--例如控制电视盒子、灯光、恒温器等，也集成了Google Assistant--变得更智能和人工智能。\n再譬如，Allo和Duo，一个文字一个视频聊天工具，可视为已被谷歌放弃的Google Talk的进化版，只不过相比Google Talk，它们也更智能、更人性化，例如能根据主人的使用习惯预判断给出一些智能回复。\n新版本手机操作系统Android N、手表操作系统Android Wear 2.0和编程工具Android Studio 2.2就不用说了，例行的更新。\n真正新的东西，是一个名叫Daydream的号称VR软件平台。用谷歌新CEO皮查伊的话说，谷歌希望用它把VR设备、APP内容串联起来，与安卓系统无缝契合（谷歌VR部门负责人稍早前放言称：跟Android一样，谷歌要打造一个VR生态系统）。\n总之，谷歌此次大会并没有什么亮眼的产品，软的硬的都没有，无人驾驶也没有被当做重头戏去谈（当然也可能是无人汽车这些业务归到了Alphabet总公司）。VR生态平台Daydream或许是一个新东西，但考虑到VR的发展现状以及不明确的前景，充其量也是一个非常早期试验品。\n但是透过现象看本质，你会发现谷歌此次发布会把所有亮点都放在了人工智能上，譬如其中的谷歌助手，就嵌入了多款产品和场景。在谷歌看来，更智能、更自然地连接人与信息、人与服务、人与知识，比发布一个什么“谷歌眼镜”的或许更重要。', '百家', '2016-06-03'),
(14, '中科招商：顺丰们，你用了我一个壳，还有十几个等你', 'img/shun.jpg', '在申通快递、圆通速递借壳上市之后，顺丰也将通过借壳鼎泰新材（002352）登陆A股。\n今天中午听到这个消息之后，相信不少鼎泰新材的股东已经在心里默默地数涨停板了，晚上睡觉都要乐开花了。\n不过，读懂君要告诉你的是，除了顺丰和那些让人嫉妒的幸运者，还有一个默默潜伏、默默等待很久的新三板公司正在欣喜若狂——那就是去年股灾期间为国接盘的中科招商（832168.OC）。\n因为中科招商旗下全资子公司中科汇通持有鼎泰新材1276.48万股，占总股本的10.93%，当前市值3.54亿元。如果顺丰借壳顺利完成，看看世纪游轮、看看七喜控股，不出意外，中科招商很可能将在鼎泰新材上赚得数亿元的利润。\n你以为到这里故事就结束了吗？错，事实上，除了鼎泰新材已经成为壳公司，中科招商还有十多个潜在的可能被借壳的公司。\n这恐怕得从2015年的股灾开始说起，那些历历在目的痛苦回忆就不提了，但中科招商就是在这个时候声名鹊起的。\n2015年8月，A股市场因为股灾爆发流动性危机，中科招商在国家队的号召下开始逆势举牌，仅仅1个多月的时间，成功举牌了16家A股上市公司。读懂君的数据显示，这些公司的市值大多在30-50亿元，同时主营业务也并不是特别突出。中科招商的大举举牌究竟是囤壳策略还是为了战略投资？这恐怕只有他们的大老板才知道了。', '百家', '2016-06-03'),
(15, '2016谷歌IO大会：AI武装下的一堆旧东西能否新生？', 'img/google.jpg', 'AI武装下的一堆旧东西\n譬如，Google Assistant（谷歌助理）是Google Now的进化版，它以语音识别和语义分析为基础，加入更多人工智能属性后，变得更加强大和具备普适性，面向未来为切入更多使用场景。\n又譬如，Google Home（硬件表现形式是一款音箱）是谷歌球状音箱Nexus Q的进化版，它比4年前谷歌发布的Nexus Q这个圆乎乎的球状设备在家庭多媒体播放外多了很多功能--例如控制电视盒子、灯光、恒温器等，也集成了Google Assistant--变得更智能和人工智能。\n再譬如，Allo和Duo，一个文字一个视频聊天工具，可视为已被谷歌放弃的Google Talk的进化版，只不过相比Google Talk，它们也更智能、更人性化，例如能根据主人的使用习惯预判断给出一些智能回复。\n新版本手机操作系统Android N、手表操作系统Android Wear 2.0和编程工具Android Studio 2.2就不用说了，例行的更新。\n真正新的东西，是一个名叫Daydream的号称VR软件平台。用谷歌新CEO皮查伊的话说，谷歌希望用它把VR设备、APP内容串联起来，与安卓系统无缝契合（谷歌VR部门负责人稍早前放言称：跟Android一样，谷歌要打造一个VR生态系统）。\n总之，谷歌此次大会并没有什么亮眼的产品，软的硬的都没有，无人驾驶也没有被当做重头戏去谈（当然也可能是无人汽车这些业务归到了Alphabet总公司）。VR生态平台Daydream或许是一个新东西，但考虑到VR的发展现状以及不明确的前景，充其量也是一个非常早期试验品。\n但是透过现象看本质，你会发现谷歌此次发布会把所有亮点都放在了人工智能上，譬如其中的谷歌助手，就嵌入了多款产品和场景。在谷歌看来，更智能、更自然地连接人与信息、人与服务、人与知识，比发布一个什么“谷歌眼镜”的或许更重要。', '百家', '2016-06-03'),
(16, '中科招商：顺丰们，你用了我一个壳，还有十几个等你', 'img/shun.jpg', '在申通快递、圆通速递借壳上市之后，顺丰也将通过借壳鼎泰新材（002352）登陆A股。\n今天中午听到这个消息之后，相信不少鼎泰新材的股东已经在心里默默地数涨停板了，晚上睡觉都要乐开花了。\n不过，读懂君要告诉你的是，除了顺丰和那些让人嫉妒的幸运者，还有一个默默潜伏、默默等待很久的新三板公司正在欣喜若狂——那就是去年股灾期间为国接盘的中科招商（832168.OC）。\n因为中科招商旗下全资子公司中科汇通持有鼎泰新材1276.48万股，占总股本的10.93%，当前市值3.54亿元。如果顺丰借壳顺利完成，看看世纪游轮、看看七喜控股，不出意外，中科招商很可能将在鼎泰新材上赚得数亿元的利润。\n你以为到这里故事就结束了吗？错，事实上，除了鼎泰新材已经成为壳公司，中科招商还有十多个潜在的可能被借壳的公司。\n这恐怕得从2015年的股灾开始说起，那些历历在目的痛苦回忆就不提了，但中科招商就是在这个时候声名鹊起的。\n2015年8月，A股市场因为股灾爆发流动性危机，中科招商在国家队的号召下开始逆势举牌，仅仅1个多月的时间，成功举牌了16家A股上市公司。读懂君的数据显示，这些公司的市值大多在30-50亿元，同时主营业务也并不是特别突出。中科招商的大举举牌究竟是囤壳策略还是为了战略投资？这恐怕只有他们的大老板才知道了。', '百家', '2016-06-03'),
(17, '2016谷歌IO大会：AI武装下的一堆旧东西能否新生？', 'img/google.jpg', 'AI武装下的一堆旧东西\n譬如，Google Assistant（谷歌助理）是Google Now的进化版，它以语音识别和语义分析为基础，加入更多人工智能属性后，变得更加强大和具备普适性，面向未来为切入更多使用场景。\n又譬如，Google Home（硬件表现形式是一款音箱）是谷歌球状音箱Nexus Q的进化版，它比4年前谷歌发布的Nexus Q这个圆乎乎的球状设备在家庭多媒体播放外多了很多功能--例如控制电视盒子、灯光、恒温器等，也集成了Google Assistant--变得更智能和人工智能。\n再譬如，Allo和Duo，一个文字一个视频聊天工具，可视为已被谷歌放弃的Google Talk的进化版，只不过相比Google Talk，它们也更智能、更人性化，例如能根据主人的使用习惯预判断给出一些智能回复。\n新版本手机操作系统Android N、手表操作系统Android Wear 2.0和编程工具Android Studio 2.2就不用说了，例行的更新。\n真正新的东西，是一个名叫Daydream的号称VR软件平台。用谷歌新CEO皮查伊的话说，谷歌希望用它把VR设备、APP内容串联起来，与安卓系统无缝契合（谷歌VR部门负责人稍早前放言称：跟Android一样，谷歌要打造一个VR生态系统）。\n总之，谷歌此次大会并没有什么亮眼的产品，软的硬的都没有，无人驾驶也没有被当做重头戏去谈（当然也可能是无人汽车这些业务归到了Alphabet总公司）。VR生态平台Daydream或许是一个新东西，但考虑到VR的发展现状以及不明确的前景，充其量也是一个非常早期试验品。\n但是透过现象看本质，你会发现谷歌此次发布会把所有亮点都放在了人工智能上，譬如其中的谷歌助手，就嵌入了多款产品和场景。在谷歌看来，更智能、更自然地连接人与信息、人与服务、人与知识，比发布一个什么“谷歌眼镜”的或许更重要。', '百家', '2016-06-03'),
(18, '中科招商：顺丰们，你用了我一个壳，还有十几个等你', 'img/shun.jpg', '在申通快递、圆通速递借壳上市之后，顺丰也将通过借壳鼎泰新材（002352）登陆A股。\n今天中午听到这个消息之后，相信不少鼎泰新材的股东已经在心里默默地数涨停板了，晚上睡觉都要乐开花了。\n不过，读懂君要告诉你的是，除了顺丰和那些让人嫉妒的幸运者，还有一个默默潜伏、默默等待很久的新三板公司正在欣喜若狂——那就是去年股灾期间为国接盘的中科招商（832168.OC）。\n因为中科招商旗下全资子公司中科汇通持有鼎泰新材1276.48万股，占总股本的10.93%，当前市值3.54亿元。如果顺丰借壳顺利完成，看看世纪游轮、看看七喜控股，不出意外，中科招商很可能将在鼎泰新材上赚得数亿元的利润。\n你以为到这里故事就结束了吗？错，事实上，除了鼎泰新材已经成为壳公司，中科招商还有十多个潜在的可能被借壳的公司。\n这恐怕得从2015年的股灾开始说起，那些历历在目的痛苦回忆就不提了，但中科招商就是在这个时候声名鹊起的。\n2015年8月，A股市场因为股灾爆发流动性危机，中科招商在国家队的号召下开始逆势举牌，仅仅1个多月的时间，成功举牌了16家A股上市公司。读懂君的数据显示，这些公司的市值大多在30-50亿元，同时主营业务也并不是特别突出。中科招商的大举举牌究竟是囤壳策略还是为了战略投资？这恐怕只有他们的大老板才知道了。', '百家', '2016-06-03'),
(19, '2016谷歌IO大会：AI武装下的一堆旧东西能否新生？', 'img/google.jpg', 'AI武装下的一堆旧东西\n譬如，Google Assistant（谷歌助理）是Google Now的进化版，它以语音识别和语义分析为基础，加入更多人工智能属性后，变得更加强大和具备普适性，面向未来为切入更多使用场景。\n又譬如，Google Home（硬件表现形式是一款音箱）是谷歌球状音箱Nexus Q的进化版，它比4年前谷歌发布的Nexus Q这个圆乎乎的球状设备在家庭多媒体播放外多了很多功能--例如控制电视盒子、灯光、恒温器等，也集成了Google Assistant--变得更智能和人工智能。\n再譬如，Allo和Duo，一个文字一个视频聊天工具，可视为已被谷歌放弃的Google Talk的进化版，只不过相比Google Talk，它们也更智能、更人性化，例如能根据主人的使用习惯预判断给出一些智能回复。\n新版本手机操作系统Android N、手表操作系统Android Wear 2.0和编程工具Android Studio 2.2就不用说了，例行的更新。\n真正新的东西，是一个名叫Daydream的号称VR软件平台。用谷歌新CEO皮查伊的话说，谷歌希望用它把VR设备、APP内容串联起来，与安卓系统无缝契合（谷歌VR部门负责人稍早前放言称：跟Android一样，谷歌要打造一个VR生态系统）。\n总之，谷歌此次大会并没有什么亮眼的产品，软的硬的都没有，无人驾驶也没有被当做重头戏去谈（当然也可能是无人汽车这些业务归到了Alphabet总公司）。VR生态平台Daydream或许是一个新东西，但考虑到VR的发展现状以及不明确的前景，充其量也是一个非常早期试验品。\n但是透过现象看本质，你会发现谷歌此次发布会把所有亮点都放在了人工智能上，譬如其中的谷歌助手，就嵌入了多款产品和场景。在谷歌看来，更智能、更自然地连接人与信息、人与服务、人与知识，比发布一个什么“谷歌眼镜”的或许更重要。', '百家', '2016-06-03'),
(20, '中科招商：顺丰们，你用了我一个壳，还有十几个等你', 'img/shun.jpg', '在申通快递、圆通速递借壳上市之后，顺丰也将通过借壳鼎泰新材（002352）登陆A股。\n今天中午听到这个消息之后，相信不少鼎泰新材的股东已经在心里默默地数涨停板了，晚上睡觉都要乐开花了。\n不过，读懂君要告诉你的是，除了顺丰和那些让人嫉妒的幸运者，还有一个默默潜伏、默默等待很久的新三板公司正在欣喜若狂——那就是去年股灾期间为国接盘的中科招商（832168.OC）。\n因为中科招商旗下全资子公司中科汇通持有鼎泰新材1276.48万股，占总股本的10.93%，当前市值3.54亿元。如果顺丰借壳顺利完成，看看世纪游轮、看看七喜控股，不出意外，中科招商很可能将在鼎泰新材上赚得数亿元的利润。\n你以为到这里故事就结束了吗？错，事实上，除了鼎泰新材已经成为壳公司，中科招商还有十多个潜在的可能被借壳的公司。\n这恐怕得从2015年的股灾开始说起，那些历历在目的痛苦回忆就不提了，但中科招商就是在这个时候声名鹊起的。\n2015年8月，A股市场因为股灾爆发流动性危机，中科招商在国家队的号召下开始逆势举牌，仅仅1个多月的时间，成功举牌了16家A股上市公司。读懂君的数据显示，这些公司的市值大多在30-50亿元，同时主营业务也并不是特别突出。中科招商的大举举牌究竟是囤壳策略还是为了战略投资？这恐怕只有他们的大老板才知道了。', '百家', '2016-06-03');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `uId` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `cookie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`uId`, `user`, `password`, `cookie`) VALUES
(1, 'admin', 'admin', '1445422207');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
