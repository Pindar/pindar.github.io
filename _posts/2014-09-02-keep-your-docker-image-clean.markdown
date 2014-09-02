---
layout: post
title:  "Keep your Docker image clean"
date:   2014-09-02 10:51:00
categories: docker development tools
comments: true
---

To keep docker images small you should always run clean commands within the same commit. For example
``
RUN apt-get install -qq -y foo
RUN apt-get clean -y
``

wont do the expected clean up in terms of image size. Instead do

``
RUN apt-get install -qq -y foo && \
    apt-get clean -y
``

Furthermore I figured out that it can help to use `--no-install-recommends` if the tool I'm installing is just for setting up the image.