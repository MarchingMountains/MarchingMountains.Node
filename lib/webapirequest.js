var WebApiRequest = function () {
		var self = this;
		self.id;
		self.headers;
		self.url;
		self.type;
		self.contentType;
		self.successCallback;
		self.errorCallback;
		self.finishedCallback;
		self.status200Callback;
		self.status201Callback;
		self.status202Callback;
		self.status400Callback;
		self.status401Callback;
		self.status402Callback;
		self.status404Callback;
		self.status500Callback;
		self.data;
		self.dataType;
		return {
			self;
		}
	}
};