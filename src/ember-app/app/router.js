import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kurs3-выгр-док-l');
  this.route('i-i-s-kurs3-выгр-док-e',
  { path: 'i-i-s-kurs3-выгр-док-e/:id' });
  this.route('i-i-s-kurs3-выгр-док-e.new',
  { path: 'i-i-s-kurs3-выгр-док-e/new' });
  this.route('i-i-s-kurs3-еди-изм-l');
  this.route('i-i-s-kurs3-еди-изм-e',
  { path: 'i-i-s-kurs3-еди-изм-e/:id' });
  this.route('i-i-s-kurs3-еди-изм-e.new',
  { path: 'i-i-s-kurs3-еди-изм-e/new' });
  this.route('i-i-s-kurs3-загр-файла-l');
  this.route('i-i-s-kurs3-загр-файла-e',
  { path: 'i-i-s-kurs3-загр-файла-e/:id' });
  this.route('i-i-s-kurs3-загр-файла-e.new',
  { path: 'i-i-s-kurs3-загр-файла-e/new' });
  this.route('i-i-s-kurs3-конвер-фай-l');
  this.route('i-i-s-kurs3-конвер-фай-e',
  { path: 'i-i-s-kurs3-конвер-фай-e/:id' });
  this.route('i-i-s-kurs3-конвер-фай-e.new',
  { path: 'i-i-s-kurs3-конвер-фай-e/new' });
  this.route('i-i-s-kurs3-конвертация-l');
  this.route('i-i-s-kurs3-конвертация-e',
  { path: 'i-i-s-kurs3-конвертация-e/:id' });
  this.route('i-i-s-kurs3-конвертация-e.new',
  { path: 'i-i-s-kurs3-конвертация-e/new' });
  this.route('i-i-s-kurs3-настр-конв-l');
  this.route('i-i-s-kurs3-настр-конв-e',
  { path: 'i-i-s-kurs3-настр-конв-e/:id' });
  this.route('i-i-s-kurs3-настр-конв-e.new',
  { path: 'i-i-s-kurs3-настр-конв-e/new' });
  this.route('i-i-s-kurs3-расширение-l');
  this.route('i-i-s-kurs3-расширение-e',
  { path: 'i-i-s-kurs3-расширение-e/:id' });
  this.route('i-i-s-kurs3-расширение-e.new',
  { path: 'i-i-s-kurs3-расширение-e/new' });
  this.route('i-i-s-kurs3-экс-файлы-l');
  this.route('i-i-s-kurs3-экс-файлы-e',
  { path: 'i-i-s-kurs3-экс-файлы-e/:id' });
  this.route('i-i-s-kurs3-экс-файлы-e.new',
  { path: 'i-i-s-kurs3-экс-файлы-e/new' });
});

export default Router;
