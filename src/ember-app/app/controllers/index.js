import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.конвертация-файла.caption'),
          title: i18n.t('forms.application.sitemap.конвертация-файла.title'),
          children: [{
            link: 'i-i-s-kurs3-конвер-фай-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-конвер-фай-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-конвер-фай-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kurs3-выгр-док-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-выгр-док-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-выгр-док-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-kurs3-загр-файла-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-загр-файла-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-загр-файла-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kurs3-экс-файлы-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-экс-файлы-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-экс-файлы-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kurs3-конвертация-l',
            caption: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-конвертация-l.caption'),
            title: i18n.t('forms.application.sitemap.конвертация-файла.i-i-s-kurs3-конвертация-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-kurs3-расширение-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-расширение-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-расширение-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kurs3-еди-изм-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-еди-изм-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-еди-изм-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kurs3-настр-конв-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-настр-конв-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-kurs3-настр-конв-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})