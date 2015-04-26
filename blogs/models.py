from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=30)
    
    class Meta:
        verbose_name_plural = "categories"

    def __unicode__(self):
        return u'%i : %s' % (self.id, self.name)

class Blog(models.Model):
    pub_date = models.DateTimeField('date published')
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category)
    cover = models.ImageField(upload_to='covers/', blank=True)
    text = models.TextField()
    n_comments = models.IntegerField('number of comments', default=0)
    public = models.BooleanField(default=1)

    def __unicode__(self):
        return u'{date} - {title}'.format(date=self.pub_date.strftime('%Y-%m-%d'), title=self.title)

class Comment(models.Model):
    blog = models.ForeignKey(Blog)
    pub_date = models.DateTimeField()
    pseudo = models.CharField(max_length=100)
    text = models.TextField()

    def __unicode__(self):
        return u"{pseudo} {date} sur {blog} : {text}".format(pseudo = self.pseudo, text = self.text, date = self.pub_date, blog = self.blog_id)
"""
class Post(models.Model):
    cat = models.CharField(max_length=50)
    cover = models.CharField(max_length=255, blank=True)
    thumb = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    titre = models.CharField(max_length=255)
    date = models.DateTimeField()
    texte = models.TextField()
    nb_com = models.IntegerField(default=0)
    status = models.BooleanField(default=1)

    def __unicode__(self):
        return u'%s' % (self.titre)
"""
