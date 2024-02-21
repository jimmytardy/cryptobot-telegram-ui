/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import emojiRegex from 'emoji-regex';
import MediaRecorder from 'opus-media-recorder';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import DoneIcon from '../../Assets/Icons/Done';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '../../Assets/Icons/Smile';
import SendIcon from '../../Assets/Icons/Send';
import MicrophoneIcon from '../../Assets/Icons/Microphone';
import DeleteIcon from '../../Assets/Icons/Delete';
import AttachButton from './../ColumnMiddle/AttachButton';
import CreatePollDialog from '../Popup/CreatePollDialog';
import EditUrlDialog from '../Popup/EditUrlDialog';
import InputBoxHeader from './InputBoxHeader';
import PasteFilesDialog from '../Popup/PasteFilesDialog';
import RecordTimer from './RecordTimer';
import EditMediaDialog from '../Popup/EditMediaDialog';
import OutputTypingManager from '../../Utils/OutputTypingManager';
import { draftEquals, getChatDraft, getChatDraftReplyToMessageId, getChatFullInfo, isMeChat, isPrivateChat, isSupergroup } from '../../Utils/Chat';
import { findLastTextNode, focusInput } from '../../Utils/DOM';
import { getMediaDocumentFromFile, getMediaPhotoFromFile, isEditedMedia } from '../../Utils/Media';
import { getEntities, getNodes, isTextMessage } from '../../Utils/Message';
import { getSize, readImageSize } from '../../Utils/Common';
import { editMessage, replyMessage } from '../../Actions/Client';
import { isDeletedUser, isMeUser } from '../../Utils/User';
import { PHOTO_SIZE, SEND_BY_CTRL_ENTER_KEY, VOICENOTE_MIN_RECORD_DURATION } from '../../Constants';
import AnimationStore from '../../Stores/AnimationStore';
import AppStore from '../../Stores/ApplicationStore';
import ChatStore from '../../Stores/ChatStore';
import FileStore from '../../Stores/FileStore';
import MessageStore from '../../Stores/MessageStore';
import OptionStore from '../../Stores/OptionStore';
import StickerStore from '../../Stores/StickerStore';
import UserStore from '../../Stores/UserStore';
import TdLibController from '../../Controllers/TdLibController';
import './InputBox.css';

const EmojiPickerButton = React.lazy(() => import('./../ColumnMiddle/EmojiPickerButton'));

class InputBox extends Component {
    render() { return (<div></div>);}
}

export default withTranslation()(InputBox);
