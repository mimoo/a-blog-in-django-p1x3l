from django.contrib import admin
from blogs.models import Blog, Category, Comment

admin.site.register(Category)
admin.site.register(Comment)

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'pub_date', 'category', 'n_comments', 'public')
    list_filter = ['pub_date', 'public']
    search_fields = ['title']

admin.site.register(Blog, BlogAdmin)
