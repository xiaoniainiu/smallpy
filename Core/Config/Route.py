#!/usr/bin/env python
#coding=utf-8
import cgi, cgitb

class Route:

	#模型
	moduleName=''

	#控制器
	controllerName=''

	#形为
	actionName=''

	def __init__(self,moduleNames='',controllerNames='',actionNames=''):
	
		froms = cgi.FieldStorage();

		Route.moduleName = froms.getvalue('m','Home');

		Route.controllerName = froms.getvalue('c','Index');

		Route.actionName = froms.getvalue('a','index');

	def getUrlParam(self):

		dictArr = {};

		dictArr['m'] = Route.moduleName;

		dictArr['c'] = Route.controllerName;

		dictArr['a'] = Route.actionName;

		return dictArr;
		
	def __del__(self):

		pass

if __name__ == '__main__':

	routObj = Route();

	print routObj.getUrlParam();