from django.db import models

class IdeaModel(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    postdate = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.title