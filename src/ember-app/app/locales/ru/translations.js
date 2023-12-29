import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKurs3ВыгрДокLForm from './forms/i-i-s-kurs3-выгр-док-l';
import IISKurs3ЕдиИзмLForm from './forms/i-i-s-kurs3-еди-изм-l';
import IISKurs3ЗагрФайлаLForm from './forms/i-i-s-kurs3-загр-файла-l';
import IISKurs3КонверФайLForm from './forms/i-i-s-kurs3-конвер-фай-l';
import IISKurs3КонвертацияLForm from './forms/i-i-s-kurs3-конвертация-l';
import IISKurs3НастрКонвLForm from './forms/i-i-s-kurs3-настр-конв-l';
import IISKurs3РасширениеLForm from './forms/i-i-s-kurs3-расширение-l';
import IISKurs3ЭксФайлыLForm from './forms/i-i-s-kurs3-экс-файлы-l';
import IISKurs3ВыгрДокEForm from './forms/i-i-s-kurs3-выгр-док-e';
import IISKurs3ЕдиИзмEForm from './forms/i-i-s-kurs3-еди-изм-e';
import IISKurs3ЗагрФайлаEForm from './forms/i-i-s-kurs3-загр-файла-e';
import IISKurs3КонверФайEForm from './forms/i-i-s-kurs3-конвер-фай-e';
import IISKurs3КонвертацияEForm from './forms/i-i-s-kurs3-конвертация-e';
import IISKurs3НастрКонвEForm from './forms/i-i-s-kurs3-настр-конв-e';
import IISKurs3РасширениеEForm from './forms/i-i-s-kurs3-расширение-e';
import IISKurs3ЭксФайлыEForm from './forms/i-i-s-kurs3-экс-файлы-e';
import IISKurs3ВыгрДокModel from './models/i-i-s-kurs3-выгр-док';
import IISKurs3ЕдиИзмModel from './models/i-i-s-kurs3-еди-изм';
import IISKurs3ЗагрФайлаModel from './models/i-i-s-kurs3-загр-файла';
import IISKurs3КонверФайModel from './models/i-i-s-kurs3-конвер-фай';
import IISKurs3КонвертацияModel from './models/i-i-s-kurs3-конвертация';
import IISKurs3НастрКонвModel from './models/i-i-s-kurs3-настр-конв';
import IISKurs3РасширениеModel from './models/i-i-s-kurs3-расширение';
import IISKurs3ТчЗагрModel from './models/i-i-s-kurs3-тч-загр';
import IISKurs3ТчНастрModel from './models/i-i-s-kurs3-тч-настр';
import IISKurs3ЭксФайлыModel from './models/i-i-s-kurs3-экс-файлы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kurs3-выгр-док': IISKurs3ВыгрДокModel,
    'i-i-s-kurs3-еди-изм': IISKurs3ЕдиИзмModel,
    'i-i-s-kurs3-загр-файла': IISKurs3ЗагрФайлаModel,
    'i-i-s-kurs3-конвер-фай': IISKurs3КонверФайModel,
    'i-i-s-kurs3-конвертация': IISKurs3КонвертацияModel,
    'i-i-s-kurs3-настр-конв': IISKurs3НастрКонвModel,
    'i-i-s-kurs3-расширение': IISKurs3РасширениеModel,
    'i-i-s-kurs3-тч-загр': IISKurs3ТчЗагрModel,
    'i-i-s-kurs3-тч-настр': IISKurs3ТчНастрModel,
    'i-i-s-kurs3-экс-файлы': IISKurs3ЭксФайлыModel
  },

  'application-name': 'Конвертированние файла',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Конвертированние файла',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Конвертированние файла',
          title: 'Kurs3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'конвертация-файла': {
          caption: 'Конвертация файла',
          title: 'Конвертация файла',
          'i-i-s-kurs3-конвер-фай-l': {
            caption: 'Конвертированные файлы',
            title: ''
          },
          'i-i-s-kurs3-выгр-док-l': {
            caption: 'Выгрузка документа',
            title: ''
          },
          'i-i-s-kurs3-загр-файла-l': {
            caption: 'Загрузка файла',
            title: ''
          },
          'i-i-s-kurs3-экс-файлы-l': {
            caption: 'Эксель файлы',
            title: ''
          },
          'i-i-s-kurs3-конвертация-l': {
            caption: 'Конвертация',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-kurs3-расширение-l': {
            caption: 'РасширениеL',
            title: 'Расширение'
          },
          'i-i-s-kurs3-еди-изм-l': {
            caption: 'ЕдиИзмL',
            title: 'Еди изм'
          },
          'i-i-s-kurs3-настр-конв-l': {
            caption: 'НастрКонвL',
            title: 'Настр конв'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kurs3-выгр-док-l': IISKurs3ВыгрДокLForm,
    'i-i-s-kurs3-еди-изм-l': IISKurs3ЕдиИзмLForm,
    'i-i-s-kurs3-загр-файла-l': IISKurs3ЗагрФайлаLForm,
    'i-i-s-kurs3-конвер-фай-l': IISKurs3КонверФайLForm,
    'i-i-s-kurs3-конвертация-l': IISKurs3КонвертацияLForm,
    'i-i-s-kurs3-настр-конв-l': IISKurs3НастрКонвLForm,
    'i-i-s-kurs3-расширение-l': IISKurs3РасширениеLForm,
    'i-i-s-kurs3-экс-файлы-l': IISKurs3ЭксФайлыLForm,
    'i-i-s-kurs3-выгр-док-e': IISKurs3ВыгрДокEForm,
    'i-i-s-kurs3-еди-изм-e': IISKurs3ЕдиИзмEForm,
    'i-i-s-kurs3-загр-файла-e': IISKurs3ЗагрФайлаEForm,
    'i-i-s-kurs3-конвер-фай-e': IISKurs3КонверФайEForm,
    'i-i-s-kurs3-конвертация-e': IISKurs3КонвертацияEForm,
    'i-i-s-kurs3-настр-конв-e': IISKurs3НастрКонвEForm,
    'i-i-s-kurs3-расширение-e': IISKurs3РасширениеEForm,
    'i-i-s-kurs3-экс-файлы-e': IISKurs3ЭксФайлыEForm
  },

});

export default translations;
