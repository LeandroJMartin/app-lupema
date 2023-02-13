
var RootQuery_possibleTypes = ['RootQuery']
module.exports.isRootQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQuery"')
  return RootQuery_possibleTypes.includes(obj.__typename)
}



var Settings_possibleTypes = ['Settings']
module.exports.isSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSettings"')
  return Settings_possibleTypes.includes(obj.__typename)
}



var Banner_possibleTypes = ['Banner']
module.exports.isBanner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBanner"')
  return Banner_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['Banner','ContentType','Taxonomy','User','Comment','EnqueuedScript','EnqueuedStylesheet','MediaItem','Page','Post','Category','PostFormat','Tag','UserRole','Menu','MenuItem','Plugin','Theme','CommentAuthor']
module.exports.isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var ContentNode_possibleTypes = ['Banner','MediaItem','Page','Post']
module.exports.isContentNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNode"')
  return ContentNode_possibleTypes.includes(obj.__typename)
}



var UniformResourceIdentifiable_possibleTypes = ['Banner','ContentType','User','MediaItem','Page','Post','Category','PostFormat','Tag']
module.exports.isUniformResourceIdentifiable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniformResourceIdentifiable"')
  return UniformResourceIdentifiable_possibleTypes.includes(obj.__typename)
}



var ContentNodeToContentTypeConnectionEdge_possibleTypes = ['ContentNodeToContentTypeConnectionEdge']
module.exports.isContentNodeToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToContentTypeConnectionEdge"')
  return ContentNodeToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var OneToOneConnection_possibleTypes = ['ContentNodeToContentTypeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToPreviewConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToTaxonomyConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPreviewConnectionEdge','TagToTaxonomyConnectionEdge','BannerToPreviewConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge']
module.exports.isOneToOneConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOneToOneConnection"')
  return OneToOneConnection_possibleTypes.includes(obj.__typename)
}



var Edge_possibleTypes = ['ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','ContentTypeToTaxonomyConnectionEdge','ContentTypeToContentNodeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','UserToEnqueuedScriptConnectionEdge','UserToEnqueuedStylesheetConnectionEdge','NodeWithAuthorToUserConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','MediaItemToCommentConnectionEdge','UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToCommentConnectionEdge','PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','TermNodeToEnqueuedScriptConnectionEdge','TermNodeToEnqueuedStylesheetConnectionEdge','CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','CategoryToContentNodeConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToPostConnectionEdge','CategoryToTaxonomyConnectionEdge','PostToCategoryConnectionEdge','PostToCommentConnectionEdge','PostFormatToContentNodeConnectionEdge','PostFormatToPostConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPostFormatConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToContentNodeConnectionEdge','TagToPostConnectionEdge','TagToTaxonomyConnectionEdge','PostToTagConnectionEdge','PostToTermNodeConnectionEdge','UserToPostConnectionEdge','UserToRevisionsConnectionEdge','UserToUserRoleConnectionEdge','BannerToPreviewConnectionEdge','RootQueryToBannerConnectionEdge','RootQueryToCategoryConnectionEdge','RootQueryToCommentConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToContentTypeConnectionEdge','RootQueryToMediaItemConnectionEdge','MenuItemToMenuItemConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge','RootQueryToMenuConnectionEdge','RootQueryToPageConnectionEdge','RootQueryToPluginConnectionEdge','RootQueryToPostFormatConnectionEdge','RootQueryToPostConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge','RootQueryToRevisionsConnectionEdge','RootQueryToTagConnectionEdge','RootQueryToTaxonomyConnectionEdge','RootQueryToTermNodeConnectionEdge','RootQueryToThemeConnectionEdge','RootQueryToUserRoleConnectionEdge','RootQueryToUserConnectionEdge']
module.exports.isEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEdge"')
  return Edge_possibleTypes.includes(obj.__typename)
}



var ContentTypeConnectionEdge_possibleTypes = ['ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','RootQueryToContentTypeConnectionEdge']
module.exports.isContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeConnectionEdge"')
  return ContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentType_possibleTypes = ['ContentType']
module.exports.isContentType = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentType"')
  return ContentType_possibleTypes.includes(obj.__typename)
}



var ContentTypeToTaxonomyConnection_possibleTypes = ['ContentTypeToTaxonomyConnection']
module.exports.isContentTypeToTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnection"')
  return ContentTypeToTaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var TaxonomyConnection_possibleTypes = ['ContentTypeToTaxonomyConnection','RootQueryToTaxonomyConnection']
module.exports.isTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyConnection"')
  return TaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var Connection_possibleTypes = ['ContentTypeToTaxonomyConnection','TaxonomyToContentTypeConnection','ContentTypeToContentNodeConnection','UserToCommentConnection','CommentToCommentConnection','UserToEnqueuedScriptConnection','UserToEnqueuedStylesheetConnection','UserToMediaItemConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','ContentNodeToEnqueuedScriptConnection','ContentNodeToEnqueuedStylesheetConnection','MediaItemToCommentConnection','UserToPageConnection','PageToCommentConnection','PageToRevisionConnection','UserToPostConnection','PostToCategoryConnection','TermNodeToEnqueuedScriptConnection','TermNodeToEnqueuedStylesheetConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','CategoryToContentNodeConnection','CategoryToPostConnection','PostToCommentConnection','PostToPostFormatConnection','PostFormatToContentNodeConnection','PostFormatToPostConnection','PostToRevisionConnection','PostToTagConnection','TagToContentNodeConnection','TagToPostConnection','PostToTermNodeConnection','UserToRevisionsConnection','UserToUserRoleConnection','RootQueryToBannerConnection','RootQueryToCategoryConnection','RootQueryToCommentConnection','RootQueryToContentNodeConnection','RootQueryToContentTypeConnection','RootQueryToMediaItemConnection','MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection','RootQueryToMenuConnection','RootQueryToPageConnection','RootQueryToPluginConnection','RootQueryToPostFormatConnection','RootQueryToPostConnection','RootQueryToEnqueuedScriptConnection','RootQueryToEnqueuedStylesheetConnection','RootQueryToRevisionsConnection','RootQueryToTagConnection','RootQueryToTaxonomyConnection','RootQueryToTermNodeConnection','RootQueryToThemeConnection','RootQueryToUserRoleConnection','RootQueryToUserConnection']
module.exports.isConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConnection"')
  return Connection_possibleTypes.includes(obj.__typename)
}



var TaxonomyConnectionEdge_possibleTypes = ['ContentTypeToTaxonomyConnectionEdge','CategoryToTaxonomyConnectionEdge','PostFormatToTaxonomyConnectionEdge','TagToTaxonomyConnectionEdge','RootQueryToTaxonomyConnectionEdge']
module.exports.isTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyConnectionEdge"')
  return TaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Taxonomy_possibleTypes = ['Taxonomy']
module.exports.isTaxonomy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomy"')
  return Taxonomy_possibleTypes.includes(obj.__typename)
}



var TaxonomyToContentTypeConnection_possibleTypes = ['TaxonomyToContentTypeConnection']
module.exports.isTaxonomyToContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnection"')
  return TaxonomyToContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var ContentTypeConnection_possibleTypes = ['TaxonomyToContentTypeConnection','RootQueryToContentTypeConnection']
module.exports.isContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeConnection"')
  return ContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var TaxonomyToContentTypeConnectionEdge_possibleTypes = ['TaxonomyToContentTypeConnectionEdge']
module.exports.isTaxonomyToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnectionEdge"')
  return TaxonomyToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var WPPageInfo_possibleTypes = ['WPPageInfo']
module.exports.isWPPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWPPageInfo"')
  return WPPageInfo_possibleTypes.includes(obj.__typename)
}



var ContentTypeToTaxonomyConnectionEdge_possibleTypes = ['ContentTypeToTaxonomyConnectionEdge']
module.exports.isContentTypeToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnectionEdge"')
  return ContentTypeToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentTypeToContentNodeConnection_possibleTypes = ['ContentTypeToContentNodeConnection']
module.exports.isContentTypeToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnection"')
  return ContentTypeToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeConnection_possibleTypes = ['ContentTypeToContentNodeConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','CategoryToContentNodeConnection','PostFormatToContentNodeConnection','TagToContentNodeConnection','UserToRevisionsConnection','RootQueryToContentNodeConnection','RootQueryToRevisionsConnection']
module.exports.isContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeConnection"')
  return ContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeConnectionEdge_possibleTypes = ['ContentTypeToContentNodeConnectionEdge','CommentToContentNodeConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','CategoryToContentNodeConnectionEdge','PostFormatToContentNodeConnectionEdge','TagToContentNodeConnectionEdge','UserToRevisionsConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToRevisionsConnectionEdge']
module.exports.isContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeConnectionEdge"')
  return ContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentTypeToContentNodeConnectionEdge_possibleTypes = ['ContentTypeToContentNodeConnectionEdge']
module.exports.isContentTypeToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnectionEdge"')
  return ContentTypeToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostTypeLabelDetails_possibleTypes = ['PostTypeLabelDetails']
module.exports.isPostTypeLabelDetails = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostTypeLabelDetails"')
  return PostTypeLabelDetails_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEditLockConnectionEdge_possibleTypes = ['ContentNodeToEditLockConnectionEdge']
module.exports.isContentNodeToEditLockConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEditLockConnectionEdge"')
  return ContentNodeToEditLockConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserConnectionEdge_possibleTypes = ['ContentNodeToEditLockConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','RootQueryToUserConnectionEdge']
module.exports.isUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnectionEdge"')
  return UserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
module.exports.isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var Commenter_possibleTypes = ['User','CommentAuthor']
module.exports.isCommenter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommenter"')
  return Commenter_possibleTypes.includes(obj.__typename)
}



var DatabaseIdentifier_possibleTypes = ['Banner','User','Comment','MediaItem','Page','Post','Category','PostFormat','Tag','Menu','MenuItem','CommentAuthor']
module.exports.isDatabaseIdentifier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDatabaseIdentifier"')
  return DatabaseIdentifier_possibleTypes.includes(obj.__typename)
}



var Avatar_possibleTypes = ['Avatar']
module.exports.isAvatar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAvatar"')
  return Avatar_possibleTypes.includes(obj.__typename)
}



var UserToCommentConnection_possibleTypes = ['UserToCommentConnection']
module.exports.isUserToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToCommentConnection"')
  return UserToCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentConnection_possibleTypes = ['UserToCommentConnection','CommentToCommentConnection','MediaItemToCommentConnection','PageToCommentConnection','PostToCommentConnection','RootQueryToCommentConnection']
module.exports.isCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnection"')
  return CommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentConnectionEdge_possibleTypes = ['CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','MediaItemToCommentConnectionEdge','PageToCommentConnectionEdge','PostToCommentConnectionEdge','RootQueryToCommentConnectionEdge']
module.exports.isCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentConnectionEdge"')
  return CommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Comment_possibleTypes = ['Comment']
module.exports.isComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



var CommentToCommenterConnectionEdge_possibleTypes = ['CommentToCommenterConnectionEdge']
module.exports.isCommentToCommenterConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommenterConnectionEdge"')
  return CommentToCommenterConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommenterConnectionEdge_possibleTypes = ['CommentToCommenterConnectionEdge']
module.exports.isCommenterConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommenterConnectionEdge"')
  return CommenterConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToContentNodeConnectionEdge_possibleTypes = ['CommentToContentNodeConnectionEdge']
module.exports.isCommentToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToContentNodeConnectionEdge"')
  return CommentToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToParentCommentConnectionEdge_possibleTypes = ['CommentToParentCommentConnectionEdge']
module.exports.isCommentToParentCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToParentCommentConnectionEdge"')
  return CommentToParentCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CommentToCommentConnection_possibleTypes = ['CommentToCommentConnection']
module.exports.isCommentToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommentConnection"')
  return CommentToCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommentToCommentConnectionEdge_possibleTypes = ['CommentToCommentConnectionEdge']
module.exports.isCommentToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentToCommentConnectionEdge"')
  return CommentToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToCommentConnectionEdge_possibleTypes = ['UserToCommentConnectionEdge']
module.exports.isUserToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToCommentConnectionEdge"')
  return UserToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedScriptConnection_possibleTypes = ['UserToEnqueuedScriptConnection']
module.exports.isUserToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnection"')
  return UserToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedScriptConnection_possibleTypes = ['UserToEnqueuedScriptConnection','ContentNodeToEnqueuedScriptConnection','TermNodeToEnqueuedScriptConnection','RootQueryToEnqueuedScriptConnection']
module.exports.isEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnection"')
  return EnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedScriptConnectionEdge_possibleTypes = ['UserToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','TermNodeToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge']
module.exports.isEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnectionEdge"')
  return EnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var EnqueuedScript_possibleTypes = ['EnqueuedScript']
module.exports.isEnqueuedScript = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedScript"')
  return EnqueuedScript_possibleTypes.includes(obj.__typename)
}



var EnqueuedAsset_possibleTypes = ['EnqueuedScript','EnqueuedStylesheet']
module.exports.isEnqueuedAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedAsset"')
  return EnqueuedAsset_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedScriptConnectionEdge_possibleTypes = ['UserToEnqueuedScriptConnectionEdge']
module.exports.isUserToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnectionEdge"')
  return UserToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedStylesheetConnection_possibleTypes = ['UserToEnqueuedStylesheetConnection']
module.exports.isUserToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnection"')
  return UserToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheetConnection_possibleTypes = ['UserToEnqueuedStylesheetConnection','ContentNodeToEnqueuedStylesheetConnection','TermNodeToEnqueuedStylesheetConnection','RootQueryToEnqueuedStylesheetConnection']
module.exports.isEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnection"')
  return EnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheetConnectionEdge_possibleTypes = ['UserToEnqueuedStylesheetConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','TermNodeToEnqueuedStylesheetConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge']
module.exports.isEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnectionEdge"')
  return EnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var EnqueuedStylesheet_possibleTypes = ['EnqueuedStylesheet']
module.exports.isEnqueuedStylesheet = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheet"')
  return EnqueuedStylesheet_possibleTypes.includes(obj.__typename)
}



var UserToEnqueuedStylesheetConnectionEdge_possibleTypes = ['UserToEnqueuedStylesheetConnectionEdge']
module.exports.isUserToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnectionEdge"')
  return UserToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToMediaItemConnection_possibleTypes = ['UserToMediaItemConnection']
module.exports.isUserToMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnection"')
  return UserToMediaItemConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemConnection_possibleTypes = ['UserToMediaItemConnection','RootQueryToMediaItemConnection']
module.exports.isMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemConnection"')
  return MediaItemConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemConnectionEdge_possibleTypes = ['UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','RootQueryToMediaItemConnectionEdge']
module.exports.isMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemConnectionEdge"')
  return MediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaItem_possibleTypes = ['MediaItem']
module.exports.isMediaItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItem"')
  return MediaItem_possibleTypes.includes(obj.__typename)
}



var NodeWithTemplate_possibleTypes = ['Banner','MediaItem','Page','Post']
module.exports.isNodeWithTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTemplate"')
  return NodeWithTemplate_possibleTypes.includes(obj.__typename)
}



var ContentTemplate_possibleTypes = ['DefaultTemplate']
module.exports.isContentTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentTemplate"')
  return ContentTemplate_possibleTypes.includes(obj.__typename)
}



var NodeWithTitle_possibleTypes = ['Banner','MediaItem','Page','Post']
module.exports.isNodeWithTitle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTitle"')
  return NodeWithTitle_possibleTypes.includes(obj.__typename)
}



var NodeWithAuthor_possibleTypes = ['MediaItem','Page','Post']
module.exports.isNodeWithAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithAuthor"')
  return NodeWithAuthor_possibleTypes.includes(obj.__typename)
}



var NodeWithAuthorToUserConnectionEdge_possibleTypes = ['NodeWithAuthorToUserConnectionEdge']
module.exports.isNodeWithAuthorToUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithAuthorToUserConnectionEdge"')
  return NodeWithAuthorToUserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithComments_possibleTypes = ['MediaItem','Page','Post']
module.exports.isNodeWithComments = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithComments"')
  return NodeWithComments_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNode_possibleTypes = ['MediaItem','Page']
module.exports.isHierarchicalContentNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNode"')
  return HierarchicalContentNode_possibleTypes.includes(obj.__typename)
}



var HierarchicalNode_possibleTypes = ['MediaItem','Page','Category']
module.exports.isHierarchicalNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalNode"')
  return HierarchicalNode_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes = ['HierarchicalContentNodeToContentNodeAncestorsConnection']
module.exports.isHierarchicalContentNodeToContentNodeAncestorsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnection"')
  return HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes = ['HierarchicalContentNodeToContentNodeAncestorsConnectionEdge']
module.exports.isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge"')
  return HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes = ['HierarchicalContentNodeToContentNodeChildrenConnection']
module.exports.isHierarchicalContentNodeToContentNodeChildrenConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnection"')
  return HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes = ['HierarchicalContentNodeToContentNodeChildrenConnectionEdge']
module.exports.isHierarchicalContentNodeToContentNodeChildrenConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnectionEdge"')
  return HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedScriptConnection_possibleTypes = ['ContentNodeToEnqueuedScriptConnection']
module.exports.isContentNodeToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnection"')
  return ContentNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes = ['ContentNodeToEnqueuedScriptConnectionEdge']
module.exports.isContentNodeToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnectionEdge"')
  return ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedStylesheetConnection_possibleTypes = ['ContentNodeToEnqueuedStylesheetConnection']
module.exports.isContentNodeToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnection"')
  return ContentNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes = ['ContentNodeToEnqueuedStylesheetConnectionEdge']
module.exports.isContentNodeToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnectionEdge"')
  return ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ContentNodeToEditLastConnectionEdge_possibleTypes = ['ContentNodeToEditLastConnectionEdge']
module.exports.isContentNodeToEditLastConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentNodeToEditLastConnectionEdge"')
  return ContentNodeToEditLastConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes = ['HierarchicalContentNodeToParentContentNodeConnectionEdge']
module.exports.isHierarchicalContentNodeToParentContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToParentContentNodeConnectionEdge"')
  return HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaItemToCommentConnection_possibleTypes = ['MediaItemToCommentConnection']
module.exports.isMediaItemToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnection"')
  return MediaItemToCommentConnection_possibleTypes.includes(obj.__typename)
}



var MediaItemToCommentConnectionEdge_possibleTypes = ['MediaItemToCommentConnectionEdge']
module.exports.isMediaItemToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnectionEdge"')
  return MediaItemToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MediaDetails_possibleTypes = ['MediaDetails']
module.exports.isMediaDetails = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaDetails"')
  return MediaDetails_possibleTypes.includes(obj.__typename)
}



var MediaItemMeta_possibleTypes = ['MediaItemMeta']
module.exports.isMediaItemMeta = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaItemMeta"')
  return MediaItemMeta_possibleTypes.includes(obj.__typename)
}



var MediaSize_possibleTypes = ['MediaSize']
module.exports.isMediaSize = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMediaSize"')
  return MediaSize_possibleTypes.includes(obj.__typename)
}



var UserToMediaItemConnectionEdge_possibleTypes = ['UserToMediaItemConnectionEdge']
module.exports.isUserToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnectionEdge"')
  return UserToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPageConnection_possibleTypes = ['UserToPageConnection']
module.exports.isUserToPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPageConnection"')
  return UserToPageConnection_possibleTypes.includes(obj.__typename)
}



var PageConnection_possibleTypes = ['UserToPageConnection','PageToRevisionConnection','RootQueryToPageConnection']
module.exports.isPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnection"')
  return PageConnection_possibleTypes.includes(obj.__typename)
}



var PageConnectionEdge_possibleTypes = ['PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','RootQueryToPageConnectionEdge']
module.exports.isPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageConnectionEdge"')
  return PageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Page_possibleTypes = ['Page']
module.exports.isPage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage"')
  return Page_possibleTypes.includes(obj.__typename)
}



var Previewable_possibleTypes = ['Banner','Page','Post']
module.exports.isPreviewable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPreviewable"')
  return Previewable_possibleTypes.includes(obj.__typename)
}



var NodeWithContentEditor_possibleTypes = ['Page','Post']
module.exports.isNodeWithContentEditor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithContentEditor"')
  return NodeWithContentEditor_possibleTypes.includes(obj.__typename)
}



var NodeWithFeaturedImage_possibleTypes = ['Page','Post']
module.exports.isNodeWithFeaturedImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImage"')
  return NodeWithFeaturedImage_possibleTypes.includes(obj.__typename)
}



var NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes = ['NodeWithFeaturedImageToMediaItemConnectionEdge']
module.exports.isNodeWithFeaturedImageToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImageToMediaItemConnectionEdge"')
  return NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithRevisions_possibleTypes = ['Page','Post']
module.exports.isNodeWithRevisions = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithRevisions"')
  return NodeWithRevisions_possibleTypes.includes(obj.__typename)
}



var NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes = ['NodeWithRevisionsToContentNodeConnectionEdge']
module.exports.isNodeWithRevisionsToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithRevisionsToContentNodeConnectionEdge"')
  return NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var NodeWithPageAttributes_possibleTypes = ['Page']
module.exports.isNodeWithPageAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithPageAttributes"')
  return NodeWithPageAttributes_possibleTypes.includes(obj.__typename)
}



var MenuItemLinkable_possibleTypes = ['Banner','Page','Post','Category','Tag']
module.exports.isMenuItemLinkable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemLinkable"')
  return MenuItemLinkable_possibleTypes.includes(obj.__typename)
}



var PageToCommentConnection_possibleTypes = ['PageToCommentConnection']
module.exports.isPageToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToCommentConnection"')
  return PageToCommentConnection_possibleTypes.includes(obj.__typename)
}



var PageToCommentConnectionEdge_possibleTypes = ['PageToCommentConnectionEdge']
module.exports.isPageToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToCommentConnectionEdge"')
  return PageToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Page_Conteusobre_possibleTypes = ['Page_Conteusobre']
module.exports.isPage_Conteusobre = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage_Conteusobre"')
  return Page_Conteusobre_possibleTypes.includes(obj.__typename)
}



var AcfFieldGroup_possibleTypes = ['Page_Conteusobre','Page_Conteusobre_item','Banner_BannerHome','Banner_BannerHome_BhConteudo','Banner_BannerHome_ImagensProntas']
module.exports.isAcfFieldGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAcfFieldGroup"')
  return AcfFieldGroup_possibleTypes.includes(obj.__typename)
}



var Page_Conteusobre_item_possibleTypes = ['Page_Conteusobre_item']
module.exports.isPage_Conteusobre_item = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPage_Conteusobre_item"')
  return Page_Conteusobre_item_possibleTypes.includes(obj.__typename)
}



var PageToPreviewConnectionEdge_possibleTypes = ['PageToPreviewConnectionEdge']
module.exports.isPageToPreviewConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToPreviewConnectionEdge"')
  return PageToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PageToRevisionConnection_possibleTypes = ['PageToRevisionConnection']
module.exports.isPageToRevisionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToRevisionConnection"')
  return PageToRevisionConnection_possibleTypes.includes(obj.__typename)
}



var PageToRevisionConnectionEdge_possibleTypes = ['PageToRevisionConnectionEdge']
module.exports.isPageToRevisionConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageToRevisionConnectionEdge"')
  return PageToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPageConnectionEdge_possibleTypes = ['UserToPageConnectionEdge']
module.exports.isUserToPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPageConnectionEdge"')
  return UserToPageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPostConnection_possibleTypes = ['UserToPostConnection']
module.exports.isUserToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPostConnection"')
  return UserToPostConnection_possibleTypes.includes(obj.__typename)
}



var PostConnection_possibleTypes = ['UserToPostConnection','CategoryToPostConnection','PostFormatToPostConnection','PostToRevisionConnection','TagToPostConnection','RootQueryToPostConnection']
module.exports.isPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostConnection"')
  return PostConnection_possibleTypes.includes(obj.__typename)
}



var PostConnectionEdge_possibleTypes = ['CategoryToPostConnectionEdge','PostFormatToPostConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToPostConnectionEdge','UserToPostConnectionEdge','RootQueryToPostConnectionEdge']
module.exports.isPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostConnectionEdge"')
  return PostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Post_possibleTypes = ['Post']
module.exports.isPost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPost"')
  return Post_possibleTypes.includes(obj.__typename)
}



var NodeWithExcerpt_possibleTypes = ['Post']
module.exports.isNodeWithExcerpt = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithExcerpt"')
  return NodeWithExcerpt_possibleTypes.includes(obj.__typename)
}



var NodeWithTrackbacks_possibleTypes = ['Post']
module.exports.isNodeWithTrackbacks = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNodeWithTrackbacks"')
  return NodeWithTrackbacks_possibleTypes.includes(obj.__typename)
}



var PostToCategoryConnection_possibleTypes = ['PostToCategoryConnection']
module.exports.isPostToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCategoryConnection"')
  return PostToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryConnection_possibleTypes = ['PostToCategoryConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','RootQueryToCategoryConnection']
module.exports.isCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryConnection"')
  return CategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryConnectionEdge_possibleTypes = ['CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','CategoryToParentCategoryConnectionEdge','PostToCategoryConnectionEdge','RootQueryToCategoryConnectionEdge']
module.exports.isCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryConnectionEdge"')
  return CategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Category_possibleTypes = ['Category']
module.exports.isCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategory"')
  return Category_possibleTypes.includes(obj.__typename)
}



var TermNode_possibleTypes = ['Category','PostFormat','Tag']
module.exports.isTermNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNode"')
  return TermNode_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedScriptConnection_possibleTypes = ['TermNodeToEnqueuedScriptConnection']
module.exports.isTermNodeToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnection"')
  return TermNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedScriptConnectionEdge_possibleTypes = ['TermNodeToEnqueuedScriptConnectionEdge']
module.exports.isTermNodeToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnectionEdge"')
  return TermNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedStylesheetConnection_possibleTypes = ['TermNodeToEnqueuedStylesheetConnection']
module.exports.isTermNodeToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnection"')
  return TermNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes = ['TermNodeToEnqueuedStylesheetConnectionEdge']
module.exports.isTermNodeToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnectionEdge"')
  return TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var HierarchicalTermNode_possibleTypes = ['Category']
module.exports.isHierarchicalTermNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHierarchicalTermNode"')
  return HierarchicalTermNode_possibleTypes.includes(obj.__typename)
}



var CategoryToAncestorsCategoryConnection_possibleTypes = ['CategoryToAncestorsCategoryConnection']
module.exports.isCategoryToAncestorsCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnection"')
  return CategoryToAncestorsCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToAncestorsCategoryConnectionEdge_possibleTypes = ['CategoryToAncestorsCategoryConnectionEdge']
module.exports.isCategoryToAncestorsCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnectionEdge"')
  return CategoryToAncestorsCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToCategoryConnection_possibleTypes = ['CategoryToCategoryConnection']
module.exports.isCategoryToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnection"')
  return CategoryToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToCategoryConnectionEdge_possibleTypes = ['CategoryToCategoryConnectionEdge']
module.exports.isCategoryToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnectionEdge"')
  return CategoryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToContentNodeConnection_possibleTypes = ['CategoryToContentNodeConnection']
module.exports.isCategoryToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnection"')
  return CategoryToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToContentNodeConnectionEdge_possibleTypes = ['CategoryToContentNodeConnectionEdge']
module.exports.isCategoryToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnectionEdge"')
  return CategoryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToParentCategoryConnectionEdge_possibleTypes = ['CategoryToParentCategoryConnectionEdge']
module.exports.isCategoryToParentCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToParentCategoryConnectionEdge"')
  return CategoryToParentCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToPostConnection_possibleTypes = ['CategoryToPostConnection']
module.exports.isCategoryToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToPostConnection"')
  return CategoryToPostConnection_possibleTypes.includes(obj.__typename)
}



var CategoryToPostConnectionEdge_possibleTypes = ['CategoryToPostConnectionEdge']
module.exports.isCategoryToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToPostConnectionEdge"')
  return CategoryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var CategoryToTaxonomyConnectionEdge_possibleTypes = ['CategoryToTaxonomyConnectionEdge']
module.exports.isCategoryToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategoryToTaxonomyConnectionEdge"')
  return CategoryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToCategoryConnectionEdge_possibleTypes = ['PostToCategoryConnectionEdge']
module.exports.isPostToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCategoryConnectionEdge"')
  return PostToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToCommentConnection_possibleTypes = ['PostToCommentConnection']
module.exports.isPostToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCommentConnection"')
  return PostToCommentConnection_possibleTypes.includes(obj.__typename)
}



var PostToCommentConnectionEdge_possibleTypes = ['PostToCommentConnectionEdge']
module.exports.isPostToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToCommentConnectionEdge"')
  return PostToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToPostFormatConnection_possibleTypes = ['PostToPostFormatConnection']
module.exports.isPostToPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnection"')
  return PostToPostFormatConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatConnection_possibleTypes = ['PostToPostFormatConnection','RootQueryToPostFormatConnection']
module.exports.isPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatConnection"')
  return PostFormatConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatConnectionEdge_possibleTypes = ['PostToPostFormatConnectionEdge','RootQueryToPostFormatConnectionEdge']
module.exports.isPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatConnectionEdge"')
  return PostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormat_possibleTypes = ['PostFormat']
module.exports.isPostFormat = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormat"')
  return PostFormat_possibleTypes.includes(obj.__typename)
}



var PostFormatToContentNodeConnection_possibleTypes = ['PostFormatToContentNodeConnection']
module.exports.isPostFormatToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnection"')
  return PostFormatToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatToContentNodeConnectionEdge_possibleTypes = ['PostFormatToContentNodeConnectionEdge']
module.exports.isPostFormatToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnectionEdge"')
  return PostFormatToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormatToPostConnection_possibleTypes = ['PostFormatToPostConnection']
module.exports.isPostFormatToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnection"')
  return PostFormatToPostConnection_possibleTypes.includes(obj.__typename)
}



var PostFormatToPostConnectionEdge_possibleTypes = ['PostFormatToPostConnectionEdge']
module.exports.isPostFormatToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnectionEdge"')
  return PostFormatToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostFormatToTaxonomyConnectionEdge_possibleTypes = ['PostFormatToTaxonomyConnectionEdge']
module.exports.isPostFormatToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostFormatToTaxonomyConnectionEdge"')
  return PostFormatToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToPostFormatConnectionEdge_possibleTypes = ['PostToPostFormatConnectionEdge']
module.exports.isPostToPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnectionEdge"')
  return PostToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToPreviewConnectionEdge_possibleTypes = ['PostToPreviewConnectionEdge']
module.exports.isPostToPreviewConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToPreviewConnectionEdge"')
  return PostToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToRevisionConnection_possibleTypes = ['PostToRevisionConnection']
module.exports.isPostToRevisionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToRevisionConnection"')
  return PostToRevisionConnection_possibleTypes.includes(obj.__typename)
}



var PostToRevisionConnectionEdge_possibleTypes = ['PostToRevisionConnectionEdge']
module.exports.isPostToRevisionConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToRevisionConnectionEdge"')
  return PostToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTagConnection_possibleTypes = ['PostToTagConnection']
module.exports.isPostToTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTagConnection"')
  return PostToTagConnection_possibleTypes.includes(obj.__typename)
}



var TagConnection_possibleTypes = ['PostToTagConnection','RootQueryToTagConnection']
module.exports.isTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagConnection"')
  return TagConnection_possibleTypes.includes(obj.__typename)
}



var TagConnectionEdge_possibleTypes = ['PostToTagConnectionEdge','RootQueryToTagConnectionEdge']
module.exports.isTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagConnectionEdge"')
  return TagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
module.exports.isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var TagToContentNodeConnection_possibleTypes = ['TagToContentNodeConnection']
module.exports.isTagToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnection"')
  return TagToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var TagToContentNodeConnectionEdge_possibleTypes = ['TagToContentNodeConnectionEdge']
module.exports.isTagToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnectionEdge"')
  return TagToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TagToPostConnection_possibleTypes = ['TagToPostConnection']
module.exports.isTagToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToPostConnection"')
  return TagToPostConnection_possibleTypes.includes(obj.__typename)
}



var TagToPostConnectionEdge_possibleTypes = ['TagToPostConnectionEdge']
module.exports.isTagToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToPostConnectionEdge"')
  return TagToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var TagToTaxonomyConnectionEdge_possibleTypes = ['TagToTaxonomyConnectionEdge']
module.exports.isTagToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTagToTaxonomyConnectionEdge"')
  return TagToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTagConnectionEdge_possibleTypes = ['PostToTagConnectionEdge']
module.exports.isPostToTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTagConnectionEdge"')
  return PostToTagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTermNodeConnection_possibleTypes = ['PostToTermNodeConnection']
module.exports.isPostToTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnection"')
  return PostToTermNodeConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeConnection_possibleTypes = ['PostToTermNodeConnection','RootQueryToTermNodeConnection']
module.exports.isTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeConnection"')
  return TermNodeConnection_possibleTypes.includes(obj.__typename)
}



var TermNodeConnectionEdge_possibleTypes = ['PostToTermNodeConnectionEdge','RootQueryToTermNodeConnectionEdge']
module.exports.isTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTermNodeConnectionEdge"')
  return TermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var PostToTermNodeConnectionEdge_possibleTypes = ['PostToTermNodeConnectionEdge']
module.exports.isPostToTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnectionEdge"')
  return PostToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToPostConnectionEdge_possibleTypes = ['UserToPostConnectionEdge']
module.exports.isUserToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToPostConnectionEdge"')
  return UserToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToRevisionsConnection_possibleTypes = ['UserToRevisionsConnection']
module.exports.isUserToRevisionsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnection"')
  return UserToRevisionsConnection_possibleTypes.includes(obj.__typename)
}



var UserToRevisionsConnectionEdge_possibleTypes = ['UserToRevisionsConnectionEdge']
module.exports.isUserToRevisionsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnectionEdge"')
  return UserToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserToUserRoleConnection_possibleTypes = ['UserToUserRoleConnection']
module.exports.isUserToUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnection"')
  return UserToUserRoleConnection_possibleTypes.includes(obj.__typename)
}



var UserRoleConnection_possibleTypes = ['UserToUserRoleConnection','RootQueryToUserRoleConnection']
module.exports.isUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRoleConnection"')
  return UserRoleConnection_possibleTypes.includes(obj.__typename)
}



var UserRoleConnectionEdge_possibleTypes = ['UserToUserRoleConnectionEdge','RootQueryToUserRoleConnectionEdge']
module.exports.isUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRoleConnectionEdge"')
  return UserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var UserRole_possibleTypes = ['UserRole']
module.exports.isUserRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserRole"')
  return UserRole_possibleTypes.includes(obj.__typename)
}



var UserToUserRoleConnectionEdge_possibleTypes = ['UserToUserRoleConnectionEdge']
module.exports.isUserToUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnectionEdge"')
  return UserToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Banner_BannerHome_possibleTypes = ['Banner_BannerHome']
module.exports.isBanner_BannerHome = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBanner_BannerHome"')
  return Banner_BannerHome_possibleTypes.includes(obj.__typename)
}



var Banner_BannerHome_BhConteudo_possibleTypes = ['Banner_BannerHome_BhConteudo']
module.exports.isBanner_BannerHome_BhConteudo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBanner_BannerHome_BhConteudo"')
  return Banner_BannerHome_BhConteudo_possibleTypes.includes(obj.__typename)
}



var Banner_BannerHome_ImagensProntas_possibleTypes = ['Banner_BannerHome_ImagensProntas']
module.exports.isBanner_BannerHome_ImagensProntas = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBanner_BannerHome_ImagensProntas"')
  return Banner_BannerHome_ImagensProntas_possibleTypes.includes(obj.__typename)
}



var BannerToPreviewConnectionEdge_possibleTypes = ['BannerToPreviewConnectionEdge']
module.exports.isBannerToPreviewConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBannerToPreviewConnectionEdge"')
  return BannerToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
}



var BannerConnectionEdge_possibleTypes = ['BannerToPreviewConnectionEdge','RootQueryToBannerConnectionEdge']
module.exports.isBannerConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBannerConnectionEdge"')
  return BannerConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToBannerConnection_possibleTypes = ['RootQueryToBannerConnection']
module.exports.isRootQueryToBannerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToBannerConnection"')
  return RootQueryToBannerConnection_possibleTypes.includes(obj.__typename)
}



var BannerConnection_possibleTypes = ['RootQueryToBannerConnection']
module.exports.isBannerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBannerConnection"')
  return BannerConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToBannerConnectionEdge_possibleTypes = ['RootQueryToBannerConnectionEdge']
module.exports.isRootQueryToBannerConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToBannerConnectionEdge"')
  return RootQueryToBannerConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToCategoryConnection_possibleTypes = ['RootQueryToCategoryConnection']
module.exports.isRootQueryToCategoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnection"')
  return RootQueryToCategoryConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToCategoryConnectionEdge_possibleTypes = ['RootQueryToCategoryConnectionEdge']
module.exports.isRootQueryToCategoryConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnectionEdge"')
  return RootQueryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToCommentConnection_possibleTypes = ['RootQueryToCommentConnection']
module.exports.isRootQueryToCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnection"')
  return RootQueryToCommentConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToCommentConnectionEdge_possibleTypes = ['RootQueryToCommentConnectionEdge']
module.exports.isRootQueryToCommentConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnectionEdge"')
  return RootQueryToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentNodeConnection_possibleTypes = ['RootQueryToContentNodeConnection']
module.exports.isRootQueryToContentNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnection"')
  return RootQueryToContentNodeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentNodeConnectionEdge_possibleTypes = ['RootQueryToContentNodeConnectionEdge']
module.exports.isRootQueryToContentNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnectionEdge"')
  return RootQueryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentTypeConnection_possibleTypes = ['RootQueryToContentTypeConnection']
module.exports.isRootQueryToContentTypeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnection"')
  return RootQueryToContentTypeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToContentTypeConnectionEdge_possibleTypes = ['RootQueryToContentTypeConnectionEdge']
module.exports.isRootQueryToContentTypeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnectionEdge"')
  return RootQueryToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var DiscussionSettings_possibleTypes = ['DiscussionSettings']
module.exports.isDiscussionSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDiscussionSettings"')
  return DiscussionSettings_possibleTypes.includes(obj.__typename)
}



var GeneralSettings_possibleTypes = ['GeneralSettings']
module.exports.isGeneralSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGeneralSettings"')
  return GeneralSettings_possibleTypes.includes(obj.__typename)
}



var RootQueryToMediaItemConnection_possibleTypes = ['RootQueryToMediaItemConnection']
module.exports.isRootQueryToMediaItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnection"')
  return RootQueryToMediaItemConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToMediaItemConnectionEdge_possibleTypes = ['RootQueryToMediaItemConnectionEdge']
module.exports.isRootQueryToMediaItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnectionEdge"')
  return RootQueryToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Menu_possibleTypes = ['Menu']
module.exports.isMenu = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenu"')
  return Menu_possibleTypes.includes(obj.__typename)
}



var MenuToMenuItemConnection_possibleTypes = ['MenuToMenuItemConnection']
module.exports.isMenuToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnection"')
  return MenuToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemConnection_possibleTypes = ['MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection']
module.exports.isMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemConnection"')
  return MenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemConnectionEdge_possibleTypes = ['MenuItemToMenuItemConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge']
module.exports.isMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemConnectionEdge"')
  return MenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItem_possibleTypes = ['MenuItem']
module.exports.isMenuItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItem"')
  return MenuItem_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemConnection_possibleTypes = ['MenuItemToMenuItemConnection']
module.exports.isMenuItemToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnection"')
  return MenuItemToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemConnectionEdge_possibleTypes = ['MenuItemToMenuItemConnectionEdge']
module.exports.isMenuItemToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnectionEdge"')
  return MenuItemToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuItemLinkableConnectionEdge_possibleTypes = ['MenuItemToMenuItemLinkableConnectionEdge']
module.exports.isMenuItemToMenuItemLinkableConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemLinkableConnectionEdge"')
  return MenuItemToMenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemLinkableConnectionEdge_possibleTypes = ['MenuItemToMenuItemLinkableConnectionEdge']
module.exports.isMenuItemLinkableConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemLinkableConnectionEdge"')
  return MenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuItemObjectUnion_possibleTypes = ['Post','Page','Banner','Category','Tag']
module.exports.isMenuItemObjectUnion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemObjectUnion"')
  return MenuItemObjectUnion_possibleTypes.includes(obj.__typename)
}



var MenuItemToMenuConnectionEdge_possibleTypes = ['MenuItemToMenuConnectionEdge']
module.exports.isMenuItemToMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuItemToMenuConnectionEdge"')
  return MenuItemToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuConnectionEdge_possibleTypes = ['MenuItemToMenuConnectionEdge','RootQueryToMenuConnectionEdge']
module.exports.isMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuConnectionEdge"')
  return MenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var MenuToMenuItemConnectionEdge_possibleTypes = ['MenuToMenuItemConnectionEdge']
module.exports.isMenuToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnectionEdge"')
  return MenuToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuItemConnection_possibleTypes = ['RootQueryToMenuItemConnection']
module.exports.isRootQueryToMenuItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnection"')
  return RootQueryToMenuItemConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuItemConnectionEdge_possibleTypes = ['RootQueryToMenuItemConnectionEdge']
module.exports.isRootQueryToMenuItemConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnectionEdge"')
  return RootQueryToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuConnection_possibleTypes = ['RootQueryToMenuConnection']
module.exports.isRootQueryToMenuConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnection"')
  return RootQueryToMenuConnection_possibleTypes.includes(obj.__typename)
}



var MenuConnection_possibleTypes = ['RootQueryToMenuConnection']
module.exports.isMenuConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMenuConnection"')
  return MenuConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToMenuConnectionEdge_possibleTypes = ['RootQueryToMenuConnectionEdge']
module.exports.isRootQueryToMenuConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnectionEdge"')
  return RootQueryToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPageConnection_possibleTypes = ['RootQueryToPageConnection']
module.exports.isRootQueryToPageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnection"')
  return RootQueryToPageConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPageConnectionEdge_possibleTypes = ['RootQueryToPageConnectionEdge']
module.exports.isRootQueryToPageConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnectionEdge"')
  return RootQueryToPageConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Plugin_possibleTypes = ['Plugin']
module.exports.isPlugin = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPlugin"')
  return Plugin_possibleTypes.includes(obj.__typename)
}



var RootQueryToPluginConnection_possibleTypes = ['RootQueryToPluginConnection']
module.exports.isRootQueryToPluginConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnection"')
  return RootQueryToPluginConnection_possibleTypes.includes(obj.__typename)
}



var PluginConnection_possibleTypes = ['RootQueryToPluginConnection']
module.exports.isPluginConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPluginConnection"')
  return PluginConnection_possibleTypes.includes(obj.__typename)
}



var PluginConnectionEdge_possibleTypes = ['RootQueryToPluginConnectionEdge']
module.exports.isPluginConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPluginConnectionEdge"')
  return PluginConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPluginConnectionEdge_possibleTypes = ['RootQueryToPluginConnectionEdge']
module.exports.isRootQueryToPluginConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnectionEdge"')
  return RootQueryToPluginConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostFormatConnection_possibleTypes = ['RootQueryToPostFormatConnection']
module.exports.isRootQueryToPostFormatConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnection"')
  return RootQueryToPostFormatConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostFormatConnectionEdge_possibleTypes = ['RootQueryToPostFormatConnectionEdge']
module.exports.isRootQueryToPostFormatConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnectionEdge"')
  return RootQueryToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostConnection_possibleTypes = ['RootQueryToPostConnection']
module.exports.isRootQueryToPostConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnection"')
  return RootQueryToPostConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToPostConnectionEdge_possibleTypes = ['RootQueryToPostConnectionEdge']
module.exports.isRootQueryToPostConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnectionEdge"')
  return RootQueryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
}



var ReadingSettings_possibleTypes = ['ReadingSettings']
module.exports.isReadingSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReadingSettings"')
  return ReadingSettings_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedScriptConnection_possibleTypes = ['RootQueryToEnqueuedScriptConnection']
module.exports.isRootQueryToEnqueuedScriptConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnection"')
  return RootQueryToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedScriptConnectionEdge_possibleTypes = ['RootQueryToEnqueuedScriptConnectionEdge']
module.exports.isRootQueryToEnqueuedScriptConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnectionEdge"')
  return RootQueryToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedStylesheetConnection_possibleTypes = ['RootQueryToEnqueuedStylesheetConnection']
module.exports.isRootQueryToEnqueuedStylesheetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnection"')
  return RootQueryToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes = ['RootQueryToEnqueuedStylesheetConnectionEdge']
module.exports.isRootQueryToEnqueuedStylesheetConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnectionEdge"')
  return RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToRevisionsConnection_possibleTypes = ['RootQueryToRevisionsConnection']
module.exports.isRootQueryToRevisionsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnection"')
  return RootQueryToRevisionsConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToRevisionsConnectionEdge_possibleTypes = ['RootQueryToRevisionsConnectionEdge']
module.exports.isRootQueryToRevisionsConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnectionEdge"')
  return RootQueryToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTagConnection_possibleTypes = ['RootQueryToTagConnection']
module.exports.isRootQueryToTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnection"')
  return RootQueryToTagConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTagConnectionEdge_possibleTypes = ['RootQueryToTagConnectionEdge']
module.exports.isRootQueryToTagConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnectionEdge"')
  return RootQueryToTagConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTaxonomyConnection_possibleTypes = ['RootQueryToTaxonomyConnection']
module.exports.isRootQueryToTaxonomyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnection"')
  return RootQueryToTaxonomyConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTaxonomyConnectionEdge_possibleTypes = ['RootQueryToTaxonomyConnectionEdge']
module.exports.isRootQueryToTaxonomyConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnectionEdge"')
  return RootQueryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToTermNodeConnection_possibleTypes = ['RootQueryToTermNodeConnection']
module.exports.isRootQueryToTermNodeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnection"')
  return RootQueryToTermNodeConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToTermNodeConnectionEdge_possibleTypes = ['RootQueryToTermNodeConnectionEdge']
module.exports.isRootQueryToTermNodeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnectionEdge"')
  return RootQueryToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var Theme_possibleTypes = ['Theme']
module.exports.isTheme = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTheme"')
  return Theme_possibleTypes.includes(obj.__typename)
}



var RootQueryToThemeConnection_possibleTypes = ['RootQueryToThemeConnection']
module.exports.isRootQueryToThemeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnection"')
  return RootQueryToThemeConnection_possibleTypes.includes(obj.__typename)
}



var ThemeConnection_possibleTypes = ['RootQueryToThemeConnection']
module.exports.isThemeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isThemeConnection"')
  return ThemeConnection_possibleTypes.includes(obj.__typename)
}



var ThemeConnectionEdge_possibleTypes = ['RootQueryToThemeConnectionEdge']
module.exports.isThemeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isThemeConnectionEdge"')
  return ThemeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToThemeConnectionEdge_possibleTypes = ['RootQueryToThemeConnectionEdge']
module.exports.isRootQueryToThemeConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnectionEdge"')
  return RootQueryToThemeConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserRoleConnection_possibleTypes = ['RootQueryToUserRoleConnection']
module.exports.isRootQueryToUserRoleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnection"')
  return RootQueryToUserRoleConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserRoleConnectionEdge_possibleTypes = ['RootQueryToUserRoleConnectionEdge']
module.exports.isRootQueryToUserRoleConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnectionEdge"')
  return RootQueryToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserConnection_possibleTypes = ['RootQueryToUserConnection']
module.exports.isRootQueryToUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnection"')
  return RootQueryToUserConnection_possibleTypes.includes(obj.__typename)
}



var UserConnection_possibleTypes = ['RootQueryToUserConnection']
module.exports.isUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnection"')
  return UserConnection_possibleTypes.includes(obj.__typename)
}



var RootQueryToUserConnectionEdge_possibleTypes = ['RootQueryToUserConnectionEdge']
module.exports.isRootQueryToUserConnectionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnectionEdge"')
  return RootQueryToUserConnectionEdge_possibleTypes.includes(obj.__typename)
}



var WritingSettings_possibleTypes = ['WritingSettings']
module.exports.isWritingSettings = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWritingSettings"')
  return WritingSettings_possibleTypes.includes(obj.__typename)
}



var RootMutation_possibleTypes = ['RootMutation']
module.exports.isRootMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRootMutation"')
  return RootMutation_possibleTypes.includes(obj.__typename)
}



var CreateBannerPayload_possibleTypes = ['CreateBannerPayload']
module.exports.isCreateBannerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateBannerPayload"')
  return CreateBannerPayload_possibleTypes.includes(obj.__typename)
}



var CreateCategoryPayload_possibleTypes = ['CreateCategoryPayload']
module.exports.isCreateCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCategoryPayload"')
  return CreateCategoryPayload_possibleTypes.includes(obj.__typename)
}



var CreateCommentPayload_possibleTypes = ['CreateCommentPayload']
module.exports.isCreateCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCommentPayload"')
  return CreateCommentPayload_possibleTypes.includes(obj.__typename)
}



var CreateMediaItemPayload_possibleTypes = ['CreateMediaItemPayload']
module.exports.isCreateMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateMediaItemPayload"')
  return CreateMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var CreatePagePayload_possibleTypes = ['CreatePagePayload']
module.exports.isCreatePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePagePayload"')
  return CreatePagePayload_possibleTypes.includes(obj.__typename)
}



var CreatePostPayload_possibleTypes = ['CreatePostPayload']
module.exports.isCreatePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostPayload"')
  return CreatePostPayload_possibleTypes.includes(obj.__typename)
}



var CreatePostFormatPayload_possibleTypes = ['CreatePostFormatPayload']
module.exports.isCreatePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostFormatPayload"')
  return CreatePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var CreateTagPayload_possibleTypes = ['CreateTagPayload']
module.exports.isCreateTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTagPayload"')
  return CreateTagPayload_possibleTypes.includes(obj.__typename)
}



var CreateUserPayload_possibleTypes = ['CreateUserPayload']
module.exports.isCreateUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateUserPayload"')
  return CreateUserPayload_possibleTypes.includes(obj.__typename)
}



var DeleteBannerPayload_possibleTypes = ['DeleteBannerPayload']
module.exports.isDeleteBannerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteBannerPayload"')
  return DeleteBannerPayload_possibleTypes.includes(obj.__typename)
}



var DeleteCategoryPayload_possibleTypes = ['DeleteCategoryPayload']
module.exports.isDeleteCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteCategoryPayload"')
  return DeleteCategoryPayload_possibleTypes.includes(obj.__typename)
}



var DeleteCommentPayload_possibleTypes = ['DeleteCommentPayload']
module.exports.isDeleteCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteCommentPayload"')
  return DeleteCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteMediaItemPayload_possibleTypes = ['DeleteMediaItemPayload']
module.exports.isDeleteMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteMediaItemPayload"')
  return DeleteMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var DeletePagePayload_possibleTypes = ['DeletePagePayload']
module.exports.isDeletePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePagePayload"')
  return DeletePagePayload_possibleTypes.includes(obj.__typename)
}



var DeletePostPayload_possibleTypes = ['DeletePostPayload']
module.exports.isDeletePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePostPayload"')
  return DeletePostPayload_possibleTypes.includes(obj.__typename)
}



var DeletePostFormatPayload_possibleTypes = ['DeletePostFormatPayload']
module.exports.isDeletePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePostFormatPayload"')
  return DeletePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTagPayload_possibleTypes = ['DeleteTagPayload']
module.exports.isDeleteTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTagPayload"')
  return DeleteTagPayload_possibleTypes.includes(obj.__typename)
}



var DeleteUserPayload_possibleTypes = ['DeleteUserPayload']
module.exports.isDeleteUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteUserPayload"')
  return DeleteUserPayload_possibleTypes.includes(obj.__typename)
}



var RegisterUserPayload_possibleTypes = ['RegisterUserPayload']
module.exports.isRegisterUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegisterUserPayload"')
  return RegisterUserPayload_possibleTypes.includes(obj.__typename)
}



var ResetUserPasswordPayload_possibleTypes = ['ResetUserPasswordPayload']
module.exports.isResetUserPasswordPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResetUserPasswordPayload"')
  return ResetUserPasswordPayload_possibleTypes.includes(obj.__typename)
}



var RestoreCommentPayload_possibleTypes = ['RestoreCommentPayload']
module.exports.isRestoreCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestoreCommentPayload"')
  return RestoreCommentPayload_possibleTypes.includes(obj.__typename)
}



var SendPasswordResetEmailPayload_possibleTypes = ['SendPasswordResetEmailPayload']
module.exports.isSendPasswordResetEmailPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSendPasswordResetEmailPayload"')
  return SendPasswordResetEmailPayload_possibleTypes.includes(obj.__typename)
}



var UpdateBannerPayload_possibleTypes = ['UpdateBannerPayload']
module.exports.isUpdateBannerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateBannerPayload"')
  return UpdateBannerPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCategoryPayload_possibleTypes = ['UpdateCategoryPayload']
module.exports.isUpdateCategoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCategoryPayload"')
  return UpdateCategoryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCommentPayload_possibleTypes = ['UpdateCommentPayload']
module.exports.isUpdateCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCommentPayload"')
  return UpdateCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateMediaItemPayload_possibleTypes = ['UpdateMediaItemPayload']
module.exports.isUpdateMediaItemPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateMediaItemPayload"')
  return UpdateMediaItemPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePagePayload_possibleTypes = ['UpdatePagePayload']
module.exports.isUpdatePagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePagePayload"')
  return UpdatePagePayload_possibleTypes.includes(obj.__typename)
}



var UpdatePostPayload_possibleTypes = ['UpdatePostPayload']
module.exports.isUpdatePostPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePostPayload"')
  return UpdatePostPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePostFormatPayload_possibleTypes = ['UpdatePostFormatPayload']
module.exports.isUpdatePostFormatPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePostFormatPayload"')
  return UpdatePostFormatPayload_possibleTypes.includes(obj.__typename)
}



var UpdateSettingsPayload_possibleTypes = ['UpdateSettingsPayload']
module.exports.isUpdateSettingsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateSettingsPayload"')
  return UpdateSettingsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTagPayload_possibleTypes = ['UpdateTagPayload']
module.exports.isUpdateTagPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTagPayload"')
  return UpdateTagPayload_possibleTypes.includes(obj.__typename)
}



var UpdateUserPayload_possibleTypes = ['UpdateUserPayload']
module.exports.isUpdateUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateUserPayload"')
  return UpdateUserPayload_possibleTypes.includes(obj.__typename)
}



var CommentAuthor_possibleTypes = ['CommentAuthor']
module.exports.isCommentAuthor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentAuthor"')
  return CommentAuthor_possibleTypes.includes(obj.__typename)
}



var DefaultTemplate_possibleTypes = ['DefaultTemplate']
module.exports.isDefaultTemplate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDefaultTemplate"')
  return DefaultTemplate_possibleTypes.includes(obj.__typename)
}
