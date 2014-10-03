---
layout: post
title:  "Docker and AWS Part 1"
date:   2014-09-28 08:10:00
categories: docker development tools aws
comments: true
---

The last bigger project I worked on was to create a deployment pipeline with Docker and AWS. As you can imagine there are a lot of problems you have to solve and in addition for each problem you can find multiple solutions; that's why I decided to write about this project not just one blog entry but a series.

In this first part I will refer how the infrastructure looked like before I dockerized it and what the goal was.

## The area before dockerized server apps
Before I dockerized our apps we had the following: we were provisioning AMIs via puppet scripts and packer.io per application and per environment. In a second step -- on launch time -- the instance was downloading the target version of the application. But to keep track of all the AMIs wasn't easy at all. In addition the provisioning time of an AMI wasn't mind blowing. But it had some nice facets: I was able to use all the advantages of AWS like auto scaling, health checks etc. Another advantage was that I could generate vagrant boxes with the same provisioning scripts just by configuring a different output filter of packer.io. 

Anyway the disadvantages are these:
* the provisioning time was to slow
* running more then one VM to simulate a full environment locally took a lot of memory
* environment independent configuration for required applications like an apache was in a different git repository and was often reused by other applications. The fear to break something while changing one setting was big. This separation leads also to a separation of IT Operation and Development what is worse in times you need a fast DevOps culture
* Puppet scripts are quite complex and even with a good test coverage it's hard to get going
* Almost nobody in the team had the knowledge to write Puppet scripts
* The lead time to test puppet changes was incredible high -- short cuts are always welcome

So we had to make a decision. Stay and improve this setup or change it entirely. I looked up different deployment frameworks, tools and configuration management systems (like Elastic Bean Stack, Cloudfoundry, Nerve and Serve, docker, once more puppet, chef, consul.io, packer.io, Cloudformation). In the end these tools made the race:

* Docker
* Cloudformation
* Consul.io
* Packer.io
* Custom solution to fire all this up

## The Goal

The new setup should solve all the disadvantages of the previous solution and in addition fulfill these general guidelines:

1. no SSH / CLI on production systems required. A.k.a. "When you log into a server you haven't enough automated"
2. all staging environments should be as similar to production as possible regardless if it's a developer's computer or a testing environment
3. software is not done before it's not in production: one team should be responsible for development and deployment. If this is not possible the deployment process must not be more then one manual step.
4. A trouble monkey (TODO link to netflix) could kill any instance anytime without creating a big incident.

## Does the toolbox achieve the goal?

### ad 1)
* Packer.io: it lets you provision AMIs (Amazon machine images). In my case I provision them with docker, the latest security patches, some amazon related tools and drivers etc.
* Cloudformation: it lets you provision the infrastructure and also an instance on startup time. Furthermore you can reference any AMI - even those you created with packer.io

If you use these tools you end up already with a server infrastructure and potentially some running apps.

### ad 2)
Docker: as you know docker is like a virtual machine without the overhead. That means you can easily run multiple docker container even on a development workstation. If this wouldn't be enough the provisioning time of a docker image is super short in comparison with a virtual machine (e.g. vagrant). Even if the host system doesn't match the AMIs which are used in production you can test the entire software stack which is required for a particular software locally. The integration part on a staging system with production-identical AMIs is very small with docker.

### add 3)
Docker: because the Dockerfile is part of the same repository in the version control system (VCS, e.g. git) as the developed application the development team has the power and the responsibility to get the entire stack running. Because nobody has CLI access the deployment of the docker images has to be automated as well what reduces the likelihood of mistakes at deploy time.

### add 4)
Docker, Cloudformation, Packer.io, Configuration Mgmt (Consul): with these tools you are able to create a setup that health itself 

## Part 2

## Slicing Images
## Slicing Container
## Logging
## Obstacles

## Part 3

## Deployment pipeline
## How to deploy docker to AWS
### All the goodies of AWS and Docker
### Configuration management
### Service discovery




