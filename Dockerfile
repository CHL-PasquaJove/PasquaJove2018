FROM httpd

# Add basic file system

ADD docker /

RUN mkdir -p /srv/data
RUN rmdir /usr/local/apache2/logs
RUN ln -s /srv/data /usr/local/apache2/logs

# Copy application

COPY dist /usr/local/apache2/htdocs

EXPOSE 8080
