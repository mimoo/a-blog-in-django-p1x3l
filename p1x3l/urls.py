from django.conf.urls import patterns, include, url

from django.contrib import admin
from blogs import admin_views

admin.autodiscover()

urlpatterns = patterns('',
    # url(r'^$', 'p1x3l.views.home', name='home'),
    url(r'^admin/upload/$', admin_views.uploadImage),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('blogs.urls', namespace="blogs")),
)
