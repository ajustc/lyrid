<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UsersModel;

class Users extends ResourceController
{
    use ResponseTrait;

    public function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, OPTIONS, POST, GET, PUT");
        header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    }

    // all users
    public function index()
    {
        $model = new UsersModel();

        $role = $this->request->getVar('role');
        if (!$role) {
            return $this->failNotFound('Parameter role diperlukan');
        }
        $data['users'] = $model->where('role', $role)->orderBy('id', 'DESC')->findAll();

        return $this->respond($data);
    }

    // create
    public function create()
    {
        $model = new UsersModel();

        $photo = '';
        if ($this->request->getVar('role') == '2') { // employee
            $rules = [
                'photo' => 'uploaded[photo]|mime_in[photo,image/jpg,image/jpeg]|max_size[photo,300]'
            ];

            if (!$this->validate($rules)) {
                return $this->respond($this->validator);
            }

            $upload = $this->request->getFile('photo');
            $upload->move(WRITEPATH . '../public/uploads/' . $upload->getName());

            $photo = $upload->getName();
        }

        $data = [
            'email'    => $this->request->getVar('email'),
            'fullname' => $this->request->getVar('fullname'),
            'password' => password_hash($this->request->getVar('password'), PASSWORD_BCRYPT),
            'photo'    => $photo,
            'role'     => $this->request->getVar('role'),
        ];

        $model->insert($data);

        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'Data user berhasil ditambahkan.'
            ]
        ];

        return $this->respondCreated($response);
    }

    // single user
    public function show($id = null)
    {
        $model = new UsersModel();

        $data = $model->where('id', $id)->first();

        if ($data) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Data tidak ditemukan.');
        }
    }

    // update
    public function update($id = null)
    {
        $model = new UsersModel();

        $photo = '';
        if ($this->request->getVar('role') == '2') { // employee
            $rules = [
                'photo' => 'uploaded[photo]|mime_in[photo,image/jpg,image/jpeg]|max_size[photo,300]'
            ];

            if (!$this->validate($rules)) {
                return $this->respond($this->validator);
            }

            $upload = $this->request->getFile('photo');
            $upload->move(WRITEPATH . '../public/uploads/' . $upload->getName());

            $photo = $upload->getName();
        }

        $data = [
            'email'    => $this->request->getVar('email'),
            'fullname' => $this->request->getVar('fullname'),
            'password' => password_hash($this->request->getVar('password'), PASSWORD_BCRYPT),
            'photo'    => $photo,
            'role'     => $this->request->getVar('role'),
        ];

        $model->update($id, $data);

        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Data user berhasil diubah.'
            ]
        ];
        return $this->respond($response);
    }

    // delete
    public function delete($id = null)
    {
        $model = new UsersModel();

        $data = $model->where('id', $id)->delete($id);

        if ($data) {
            $model->delete($id);

            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Data user berhasil dihapus.'
                ]
            ];

            return $this->respondDeleted($response);
        } else {
            return $this->failNotFound('Data tidak ditemukan.');
        }
    }
}
