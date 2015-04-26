# -*- coding: utf-8 -*-
from django.utils import timezone
from django.shortcuts import render, get_object_or_404, redirect
from django.template.defaultfilters import slugify
from django import forms

from django.http import HttpResponse

from blogs.models import Blog, Category, Comment
import markdown

months = [
    '',
    'Janvier',
    u'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    u'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    u'Décembre',
]

def index(request, category_name=False, page=0):
    # get blogs
    blogs = Blog.objects.order_by('-pk').exclude(public=False).select_related('category__name')
    if(category_name):
        blogs = blogs.filter(category__name=category_name)

    # formatting data
    for blog in blogs:
        # date
        blog.group_date = months[blog.pub_date.month]
        blog.group_date += '\n' + str(blog.pub_date.year)
        # slug
        blog.slug = slugify(blog.title)
        if not blog.slug:
            blog.slug = 'blank'

    # ajax?
    ajax = request.GET.get('ajax', False)

    # output
    context = {'blogs': blogs, 'ajax': ajax}
    return render(request, 'blogs/index.html', context);

def detail(request, blog_id, slug=False):
    # get blog
    blog = get_object_or_404(Blog, pk=blog_id, public=True)

    # formatting blog
    blog.date = str(blog.pub_date.day) + ' '
    blog.date += months[blog.pub_date.month] + '\n'
    blog.date += str(blog.pub_date.year)

    blog.text = markdown.markdown(blog.text, extensions = ['codehilite(linenums=False)'])

    # get comments
    comments = Comment.objects.filter(blog_id=blog_id).order_by('pk')

    # formatting comments
    for comment in comments:
        comment.date = str(comment.pub_date.day) + ' '
        comment.date += months[comment.pub_date.month] + '\n'
        comment.date += str(comment.pub_date.year)

    # ajax?
    ajax = request.GET.get('ajax', False)

    # output
    context = {'blog': blog, 'ajax': ajax, 'comments': comments}
    return render(request, 'blogs/detail.html', context)

#
# Post a comment on a Blog Post
#
class CommentForm(forms.Form):
    pseudo = forms.CharField(max_length=100)
    text = forms.CharField()
    honeypot = forms.IntegerField(required=False)
    ajax = forms.BooleanField(required=False)
    antispam = forms.IntegerField(required=True)

def postComment(request, blog_id):
    if request.method == 'POST':
        form = CommentForm(request.POST)
        
        if form.is_valid():
            com = Comment(blog_id= blog_id, pseudo=form.data.get('pseudo'),
                          text=form.data.get('text'), pub_date = timezone.now())
            com.save()

            if form.data.get('ajax') == '1':
                return HttpResponse('1')
            else:
                url = slugify(Blog.objects.get(pk=blog_id).title)
                return redirect('blogs:detail', blog_id= blog_id, slug= url)
        else:
            return HttpResponse('0')
    else:
        return HttpResponse('0')
