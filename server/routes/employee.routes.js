const express = require('express');
const router = express.Router();

 const employee = require('../controllers/employee.controller')   


 //get: obtener,  post: guardar,  put: actualizar, delete: eliminar
router.get('/', employee.getEmployees); 
router.post('/', employee.createEmployee); 
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;