const { CronJob } = require('cron');

const Notification = require('../models/Notification');

function sendInitialNotification(user) {
  const date = new Date();

  date.setMinutes(date.getMinutes() + 1);

  const job = new CronJob(date, function () {
    Notification.create({
      user: user._id,
      title: 'Já vamos partir?',
      message: 'Estique o esqueleto, aperte o cinto, nossa viagem vai começar!',
    });
  });

  job.start();
}

function sendPostureAlertNotification(user) {
  const date = new Date();

  date.setMinutes(date.getMinutes() + 15);

  const job = new CronJob(date, function () {
    Notification.create({
      user: user._id,
      title: 'Olha a postura!!',
      message:
        'As costas devem estar encostadas no banco e a cabeça no encosto, assim, vc vai evitar aquela dor nas costas horrível.',
    });
  });
  job.start();
}

function sendDrinkWaterAlertNotification(user) {
  const date = new Date();

  date.setMinutes(date.getMinutes() + 120);

  const job = new CronJob(date, function () {
    Notification.create({
      user: user._id,
      title: 'Já bebeu um gole de água hoje?',
      message:
        'Não se esqueça da hidratação, beba água, você sabia que 70% de nosso corpo é comporto por água?',
    });
  });

  job.start();
}

function sendPauseAlert(user) {
  const date = new Date();

  date.setMinutes(date.getMinutes() + 330);

  const job = new CronJob(date, function () {
    Notification.create({
      user: user._id,
      title: 'Está na hora de esticar as pernas.',
      message:
        'Agora é hora de descansar um pouco, o que acha desses pontos de parada que listei?',
    });
  });

  job.start();
}

module.exports = {
  sendCreateRouteNotifications(user) {
    sendInitialNotification(user);
    sendPostureAlertNotification(user);
    sendDrinkWaterAlertNotification(user);
    sendPauseAlert(user);
  },
};
