module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    main: JSON.parse($.fs.readFileSync('./data/main.json', 'utf8')),
                    about: JSON.parse($.fs.readFileSync('./data/about.json', 'utf8')),
                    projects: JSON.parse($.fs.readFileSync('./data/projects.json', 'utf8')),
                    team: JSON.parse($.fs.readFileSync('./data/team.json', 'utf8')),
                    brands: JSON.parse($.fs.readFileSync('./data/brands.json', 'utf8')),
                    news: JSON.parse($.fs.readFileSync('./data/news.json', 'utf8')),
                    contacts: JSON.parse($.fs.readFileSync('./data/contacts.json', 'utf8')),
                    brandsInner: JSON.parse($.fs.readFileSync('./data/brands-inner.json', 'utf8')),
                    projectsInner: JSON.parse($.fs.readFileSync('./data/projects-inner.json', 'utf8')),
                    newsInner: JSON.parse($.fs.readFileSync('./data/news-inner.json', 'utf8'))
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
