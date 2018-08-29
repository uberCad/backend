'use strict';
const db = require('@arangodb').db;

//document
const sessions = 'sessions';
const users = 'users';
const projects = 'projects';
const snapshots = 'snapshots';
const objects = 'objects';
const materials = 'materials';
const orders = 'orders';

//edge
const projectRelation = 'project_relation';

if (!db._collection(orders)) {
    db._createDocumentCollection(orders);
}
if (!db._collection(materials)) {
    db._createDocumentCollection(materials);
}
if (!db._collection(projects)) {
    db._createDocumentCollection(projects);
}

if (!db._collection(snapshots)) {
    db._createDocumentCollection(snapshots);
}

if (!db._collection(objects)) {
    db._createDocumentCollection(objects);
}

if (!db._collection(sessions)) {
    db._createDocumentCollection(sessions);
}

if (!db._collection(users)) {
    db._createDocumentCollection(users);
}

db._collection(users).ensureIndex({
    type: 'hash',
    fields: ['username'],
    unique: true
});

if (!db._collection(projectRelation)) {
    db._createEdgeCollection(projectRelation);
}
