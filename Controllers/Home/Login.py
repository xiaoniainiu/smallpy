#!/usr/bin/env python
# -*- coding: utf-8 -*-
#coding=utf-8
from jinja2 import Environment,FileSystemLoader;

from Core.Controller import *;

import os;


class Login(Controller):

	"""docstring for ClassName"""

	def __init__(self):

		super(Login, self).__init__('哈哈');

		import sys;

		#sys.setdefaultencoding('utf-8');

		self.env = Environment(loader=FileSystemLoader('/var/www/cgi-bin/smallpy/Views', encoding='utf-8'));

	def index(self):

		print self.arg;

		template = self.env.get_template('index.html');

		print template.render({'name':u'fd中fdww'});

if __name__ == '__main__':

	loginObj = Login();

	print loginObj.index();