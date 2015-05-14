#!/usr/bin/env python
#coding=utf-8
from Core.Route import *;

#from Core.Controller import Controller;

#from core import Route#在模块目录中导入Route文件 
#from core.Home import Route #每个目录都要有__init__.py Route.Route();
#from core.Home.Route import * #在模块目录中导入Route文件 Route() from 目录.目录....目录.文件 import *


print 'Content-type:text/html;charset=utf-8';

print '';

froms = Route(); #文件中实例类

fromParam = froms.getUrlParam();

# m = fromParam['m'] if fromParam['m'] else 'Home';

# c = fromParam['c'] if fromParam['c'] else 'Index';

# a = fromParam['a'] if fromParam['a'] else 'index';

# className = 'Controllers' + '.' + m + '.' + c;

# ruteLoad = "from "+ className + ' import *';

# exec(ruteLoad);

# classNameCmd = 'obj = '+ c + '()';

# exec(classNameCmd);

# cmd = 'obj.' + a + '()';

# exec(cmd);

froms.run(); #执行脚本运行程序

#print fromParam;





