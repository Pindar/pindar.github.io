---
layout: post
status: publish
published: true
title: Why rapid deployments are so important
author: Simon Dittlmann
author_login: Simon
author_email: simon.dittlmann@itnotes.de
author_url: http://www.itnotes.de
wordpress_id: 134
wordpress_url: http://www.pindarsign.de/itnotes/?p=134
date: '2012-05-17 23:39:58 +0200'
date_gmt: '2012-05-17 21:39:58 +0200'
categories:
- articles
tags:
- deployments
- software
- agile
comments: []
---
<h2>What's the problem about rare deployments?</h2><br />
If your release cycle is very long your customer will start to ask for things which will make the system very complex. Why? Because your customer want their ideas always as fast as possible implemented. So your customer will start thinking about a system that is completly configurable while running. This new requirements will cause in a complex and less maintainable system.</p>
<h2>But... I can't release so often.</h2><br />
No, you can! It's always possible to release in short cycles. Everything you need is the right set up:</p>
<ul>
<li>Continuous integration is the important thing. Without a CI-Server you won't be able to release in short cycles.</li>
<li>Test automation. You need unit tests, integration tests and for some cases UI tests.</li>
<li>Monitoring. Your development team should always have an eye on the log files. If you don't know your problems in time you will have big trouble later...</li>
<li>Automated deployment. If your deployment isn't automated yet and you want to deploy in short cycles you will have no time left to develop software.</li>
<li>Code management with GIT. This tool supports your rapid deployments in such an dramatic way; it will blow you away.</li>
<li>A very closely collaboration with your customer to manage the requirements. Don't write abstract requirements -- use examples as much as possible.</li><br />
</ul><br />
This is IMHO the minimum set up that you need if you want to have a continuous deployment.</p>
<h2>What do you get?</h2><br />
Your customer get what he want much faster. Your developer don't have to create unmaintainable software but they can create awesome features. Developer and customer will love this new way to work. Rapid deployments ends up in a happy collaboration between customer and developer. Not more but also not less.</p>
