from django.shortcuts import render, render_to_response
from django.contrib.admin.views.decorators import staff_member_required
from django.template import RequestContext
from django import forms
from django.http import HttpResponse
from django.conf import settings

import os

def save_file(file, path = 'upload/'):
    filename = file._get_name()

    path2 = settings.MEDIA_ROOT + str(path) + str(filename)

    ii = ''
    if(os.path.exists(path2)):
        ii = 1
        while os.path.exists(path2):
            ii = ii + 1
            path2 = settings.MEDIA_ROOT + str(path) + str(ii) + str(filename)
    fd = open(path2, 'wb')
    for chunk in file.chunks():
        fd.write(chunk)
    fd.close()
    return '![alt](/media/upload/' + str(ii) + str(filename) + ')'

class ImageUploadForm(forms.Form):
    image = forms.ImageField()

@staff_member_required
def uploadImage(request):
    url = ''
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid() and form.is_multipart():
            url = save_file(request.FILES['image'])
        else:
            form = ImageUploadForm()
    else:
        form = ImageUploadForm()
    context = { 'form': form, 'url': url}
    return render_to_response('blogs/admin/upload.html', context, RequestContext(request))

