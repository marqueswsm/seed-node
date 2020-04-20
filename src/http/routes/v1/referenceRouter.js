const express = require('express');
const container = require('../../../container');
const ReferenceController = require('../../controllers/referenceController');

const router = express.Router();

const controller = new ReferenceController(container);

router.route('/')
  .post(
    controller.create.bind(controller),
  );
