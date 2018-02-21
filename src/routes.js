import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsList from './components/posts-list';
import PostNew from './components/posts-new';
import PostShow from './components/post-show';

import App from './components/app';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={PostsList} />
		<Route path="posts/new" component={PostNew} />
		<Route path="posts/:id" component={PostShow} />
	</Route>
);