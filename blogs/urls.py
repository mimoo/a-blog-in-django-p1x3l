from django.conf.urls import patterns, url

from blogs import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)

urlpatterns += patterns('',
    url(r'^article/(?P<blog_id>\d+)/$', views.detail, name='detail'),
    url(r'^article/(?P<blog_id>\d+)/(?P<slug>[\w-]+)/$', views.detail, name='detail'),
    url(r'^postComment/(?P<blog_id>\d+)/$', views.postComment, name='postComment'),
)

urlpatterns += patterns('',
    url(r'^(?P<category_name>\w+)/$', views.index, name='category'),
    url(r'^(?P<category_name>\w+)/(?P<page>\d+)/$', views.index, name='category_pages'),
)

