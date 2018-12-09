var mongoose = require('mongoose');
var messageSchema = require('./message.schema.server');
var messageModel = mongoose.model('messageModel', messageSchema);

// function findUserById(userId) {
//   return userModel.findById(userId);
// }

function createMessage(message) {
    return messageModel.create(message);
}

// function findAllAds() {
//     return adModel.find();
// }
// function findAdsForUser(userId) {
//     return adModel
//         .find({seller: userId})
//         .exec();
// }
//
// function deleteAdForUser(userId)
// {
//     return adModel.find({seller:userId}).remove().exec();
// }
//
// function updateAd(updatead) {
//     return adModel.updateOne({_id: updatead._id}, updatead);
// }
//
//
// function findAdById(adId) {
//     return adModel.findById(adId);
// }
//
// function findAdByCategory(category)
// {
//     return adModel.find({category:category});
// }
//
// function deleteAdById(adId)
// {
//     return adModel.find({_id:adId}).remove().exec();
// }
var api = {
    createMessage: createMessage,
    // findAllAds: findAllAds,
    // findAdsForUser: findAdsForUser,
    // deleteAdForUser: deleteAdForUser,
    // deleteAdById: deleteAdById,
    // findAdById: findAdById,
    // findAdByCategory: findAdByCategory,
    // updateAd: updateAd
    // findUserById: findUserById
};

module.exports = api;