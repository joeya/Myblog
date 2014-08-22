(function(e){function t(t,n,r){this.element=t;this.options=n;this.callback=e.isFunction(r)?r:e.noop}t.prototype=function(){function t(t,n,r,i){e.ajax({url:"https://api.github.com/repos/"+t+"/"+n+"/commits?sha="+r,dataType:"jsonp",success:i})}function n(n){if(!n.options){n.element.append('<span class="error">Options for widget are not set.</span>');return}var r=n.callback;var i=n.element;var s=n.options.user;var o=n.options.repo;var u=n.options.branch;var a=n.options.avatarSize||20;var f=n.options.last===undefined?0:n.options.last;var l=n.options.limitMessageTo===undefined?0:n.options.limitMessageTo;t(s,o,u,function(t){function g(t,n){return e("<img>").attr("class","github-avatar").attr("src","https://www.gravatar.com/avatar/"+t+"?s="+n)}function y(t){return e("<a>").attr("href","https://github.com/"+t).text(t)}function b(t,n){var r=t;if(l>0&&t.length>l){t=t.substr(0,l)+"..."}var i=e('<a class="github-commit"></a>').attr("title",r).attr("href","https://github.com/"+s+"/"+o+"/commit/"+n).text(t);return i}function w(e){var t=(new Date(e)).getTime();var n=(new Date).getTime();var r=Math.floor((n-t)/(24*3600*1e3));if(r===0){var i=Math.floor((n-t)/(3600*1e3));if(i===0){var s=Math.floor((n-t)/(600*1e3));if(s===0){return"just now"}return"about "+s+" minutes ago"}return"about "+i+" hours ago"}else if(r==1){return"yesterday"}return r+" days ago"}var n=t.data;var u=f<n.length?f:n.length;i.empty();var c=e('<ul class="github-commits-list">').appendTo(i);for(var h=0;h<u;h++){var p=n[h];var d=e("<li>");var v=e('<span class="github-user">');if(p.author!==null){v.append(g(p.author.gravatar_id,a));v.append(y(p.author.login))}else{v.append(p.commit.committer.name)}d.append(v);var m=e("<span class=github-commit-date>");d.append(b(p.commit.message,p.sha));d.append(m.text(w(p.commit.committer.date)));c.append(d)}r(i)})}return{run:function(){n(this)}}}();e.fn.githubInfoWidget=function(n,r){this.each(function(){(new t(e(this),n,r)).run()});return this}})(jQuery)