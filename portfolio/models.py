from django.db import models


class Project(models.Model):

    title = models.CharField(
        max_length = 150,
    )

    description = models.TextField(
        help_text = 'Write a description about the project.',
        default = 'No description.'
    )

    image = models.ImageField(
        default = 'default.jpg',
        upload_to = 'portfolio/images/'
    )

    url = models.URLField(
        blank = True
    )

    def __str__(self):
        return f'Project: {self.title}'
