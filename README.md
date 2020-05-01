<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [discord-yamusic](#discord-yamusic)
  - [Index](#index)
    - [Enumerations](#enumerations)
    - [Classes](#classes)
    - [Interfaces](#interfaces)
    - [Variables](#variables)
    - [Functions](#functions)
    - [Object literals](#object-literals)
  - [Variables](#variables-1)
    - [`Const` bot](#const-bot)
    - [`Const` copyright](#const-copyright)
    - [`Const` logger](#const-logger)
    - [`Const` logoYandexMusicURL](#const-logoyandexmusicurl)
  - [Functions](#functions-1)
    - [`Const` add](#const-add)
    - [`Const` clear](#const-clear)
    - [`Const` createTrackURL](#const-createtrackurl)
    - [`Const` downloadInfo](#const-downloadinfo)
    - [`Const` embedHelp](#const-embedhelp)
    - [`Const` embedList](#const-embedlist)
    - [`Const` embedMultipleTracksAdded](#const-embedmultipletracksadded)
    - [`Const` embedNowPlaying](#const-embednowplaying)
    - [`Const` embedPing](#const-embedping)
    - [`Const` embedTrackAdded](#const-embedtrackadded)
    - [`Const` findAlbum](#const-findalbum)
    - [`Const` findContentByURL](#const-findcontentbyurl)
    - [`Const` findPlaylist](#const-findplaylist)
    - [`Const` findTrack](#const-findtrack)
    - [`Const` findTrackByName](#const-findtrackbyname)
    - [getArguments](#getarguments)
    - [getCommandName](#getcommandname)
    - [`Const` help](#const-help)
    - [`Const` isAlbumURL](#const-isalbumurl)
    - [`Const` isPlaylistURL](#const-isplaylisturl)
    - [`Const` isTrackURL](#const-istrackurl)
    - [`Const` isURL](#const-isurl)
    - [`Const` isYandexURL](#const-isyandexurl)
    - [`Const` join](#const-join)
    - [`Const` joinUserChannel](#const-joinuserchannel)
    - [`Const` list](#const-list)
    - [`Const` move](#const-move)
    - [`Const` np](#const-np)
    - [parse](#parse)
    - [`Const` pause](#const-pause)
    - [`Const` play](#const-play)
    - [`Const` remove](#const-remove)
    - [`Const` repeat](#const-repeat)
    - [`Const` secondsToTimestamp](#const-secondstotimestamp)
    - [`Const` shuffle](#const-shuffle)
    - [`Const` skip](#const-skip)
    - [`Const` stop](#const-stop)
    - [`Const` time](#const-time)
    - [`Const` volume](#const-volume)
  - [Object literals](#object-literals-1)
    - [`Const` DefaultBotConfig](#const-defaultbotconfig)
    - [▪ **DefaultBotConfig**: *object*](#%E2%96%AA-defaultbotconfig-object)
- [discord-yamusic](#discord-yamusic-1)
- [Classes](#classes-1)
  - [Class: BotCommandMap](#class-botcommandmap)
    - [Hierarchy](#hierarchy)
    - [Index](#index-1)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: BotConsoleReader](#class-botconsolereader)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-2)
    - [Constructors](#constructors)
    - [Properties](#properties-1)
    - [Methods](#methods-1)
  - [Class: BotStatus](#class-botstatus)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-3)
    - [Constructors](#constructors-1)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: MediaPlayer](#class-mediaplayer)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-4)
    - [Constructors](#constructors-2)
    - [Properties](#properties-3)
    - [Methods](#methods-3)
  - [Class: MediaQueue](#class-mediaqueue)
    - [Hierarchy](#hierarchy-4)
    - [Indexable](#indexable)
    - [Index](#index-5)
    - [Properties](#properties-4)
    - [Accessors](#accessors)
    - [Methods](#methods-4)
  - [Class: YBot](#class-ybot)
    - [Hierarchy](#hierarchy-5)
    - [Implements](#implements)
    - [Index](#index-6)
    - [Constructors](#constructors-3)
    - [Properties](#properties-5)
    - [Methods](#methods-5)
- [Enums](#enums)
  - [Enumeration: ResultCode](#enumeration-resultcode)
    - [Index](#index-7)
    - [Enumeration members](#enumeration-members)
- [Interfaces](#interfaces-1)
  - [Interface: Bot](#interface-bot)
    - [Hierarchy](#hierarchy-6)
    - [Implemented by](#implemented-by)
    - [Index](#index-8)
    - [Properties](#properties-6)
  - [Interface: BotConfig](#interface-botconfig)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-9)
    - [Properties](#properties-7)
  - [Interface: BotPlugin](#interface-botplugin)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-10)
    - [Methods](#methods-6)
  - [Interface: MediaItem](#interface-mediaitem)
    - [Hierarchy](#hierarchy-9)
    - [Index](#index-11)
    - [Properties](#properties-8)
  - [Interface: MediaType](#interface-mediatype)
    - [Hierarchy](#hierarchy-10)
    - [Index](#index-12)
    - [Methods](#methods-7)
  - [Interface: ParsedMessage <**MT**>](#interface-parsedmessage-mt)
    - [Type parameters](#type-parameters)
    - [Hierarchy](#hierarchy-11)
    - [Index](#index-13)
    - [Properties](#properties-9)
  - [Interface: ParserOptions](#interface-parseroptions)
    - [Hierarchy](#hierarchy-12)
    - [Index](#index-14)
    - [Properties](#properties-10)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="globalsmd"></a>

[discord-yamusic](#globalsmd)

# discord-yamusic

## Index

### Enumerations

* [ResultCode](#enumsresultcodemd)

### Classes

* [BotCommandMap](#classesbotcommandmapmd)
* [BotConsoleReader](#classesbotconsolereadermd)
* [BotStatus](#classesbotstatusmd)
* [MediaPlayer](#classesmediaplayermd)
* [MediaQueue](#classesmediaqueuemd)
* [YBot](#classesybotmd)

### Interfaces

* [Bot](#interfacesbotmd)
* [BotConfig](#interfacesbotconfigmd)
* [BotPlugin](#interfacesbotpluginmd)
* [MediaItem](#interfacesmediaitemmd)
* [MediaType](#interfacesmediatypemd)
* [ParsedMessage](#interfacesparsedmessagemd)
* [ParserOptions](#interfacesparseroptionsmd)

### Variables

* [bot](#const-bot)
* [copyright](#const-copyright)
* [logger](#const-logger)
* [logoYandexMusicURL](#const-logoyandexmusicurl)

### Functions

* [add](#const-add)
* [clear](#const-clear)
* [createTrackURL](#const-createtrackurl)
* [downloadInfo](#const-downloadinfo)
* [embedHelp](#const-embedhelp)
* [embedList](#const-embedlist)
* [embedMultipleTracksAdded](#const-embedmultipletracksadded)
* [embedNowPlaying](#const-embednowplaying)
* [embedPing](#const-embedping)
* [embedTrackAdded](#const-embedtrackadded)
* [findAlbum](#const-findalbum)
* [findContentByURL](#const-findcontentbyurl)
* [findPlaylist](#const-findplaylist)
* [findTrack](#const-findtrack)
* [findTrackByName](#const-findtrackbyname)
* [getArguments](#getarguments)
* [getCommandName](#getcommandname)
* [help](#const-help)
* [isAlbumURL](#const-isalbumurl)
* [isPlaylistURL](#const-isplaylisturl)
* [isTrackURL](#const-istrackurl)
* [isURL](#const-isurl)
* [isYandexURL](#const-isyandexurl)
* [join](#const-join)
* [joinUserChannel](#const-joinuserchannel)
* [list](#const-list)
* [move](#const-move)
* [np](#const-np)
* [parse](#parse)
* [pause](#const-pause)
* [play](#const-play)
* [remove](#const-remove)
* [repeat](#const-repeat)
* [secondsToTimestamp](#const-secondstotimestamp)
* [shuffle](#const-shuffle)
* [skip](#const-skip)
* [stop](#const-stop)
* [time](#const-time)
* [volume](#const-volume)

### Object literals

* [DefaultBotConfig](#const-defaultbotconfig)

## Variables

### `Const` bot

• **bot**: *[YBot](#classesybotmd)‹›* = new YBot(DefaultBotConfig)

Defined in Documents/GitHub/yamb/src/app.ts:6

___

### `Const` copyright

• **copyright**: *"© Яндекс.Музыка"* = "© Яндекс.Музыка"

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:9

___

### `Const` logger

• **logger**: *Logger‹›* = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({
      filename: './log/warn.log',
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({
      filename: './log/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({
      filename: './log/fatal.log',
      level: 'fatal',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.json(),
      ),
    }),
    new winston.transports.File({ filename: './log/combined.log' }),
  ],
})

Defined in Documents/GitHub/yamb/src/utils/logger.ts:7

___

### `Const` logoYandexMusicURL

• **logoYandexMusicURL**: *"https://cache-mskstoredata05.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/icon_main.png"* = "https://cache-mskstoredata05.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/icon_main.png"

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:8

## Functions

### `Const` add

▸ **add**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/add.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` clear

▸ **clear**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/clear.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` createTrackURL

▸ **createTrackURL**(`info`: DownloadInfo): *string*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`info` | DownloadInfo |

**Returns:** *string*

___

### `Const` downloadInfo

▸ **downloadInfo**(`storageDir`: string): *Promise‹DownloadInfo›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`storageDir` | string |

**Returns:** *Promise‹DownloadInfo›*

___

### `Const` embedHelp

▸ **embedHelp**(): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:68

**Returns:** *RichEmbed*

___

### `Const` embedList

▸ **embedList**(`queue`: BotMediaQueue, `page`: number): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`queue` | BotMediaQueue |
`page` | number |

**Returns:** *RichEmbed*

___

### `Const` embedMultipleTracksAdded

▸ **embedMultipleTracksAdded**(`tracks`: [MediaItem](#interfacesmediaitemmd)[]): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`tracks` | [MediaItem](#interfacesmediaitemmd)[] |

**Returns:** *RichEmbed*

___

### `Const` embedNowPlaying

▸ **embedNowPlaying**(`track`: [MediaItem](#interfacesmediaitemmd)): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:24

**Parameters:**

Name | Type |
------ | ------ |
`track` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *RichEmbed*

___

### `Const` embedPing

▸ **embedPing**(`ping`: number): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:103

**Parameters:**

Name | Type |
------ | ------ |
`ping` | number |

**Returns:** *RichEmbed*

___

### `Const` embedTrackAdded

▸ **embedTrackAdded**(`track`: [MediaItem](#interfacesmediaitemmd)): *RichEmbed*

Defined in Documents/GitHub/yamb/src/core/BotEmbed.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`track` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *RichEmbed*

___

### `Const` findAlbum

▸ **findAlbum**(`albumID`: string): *Promise‹Track[]›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:73

Принимает идентификатор альбома и возвращает треки из альбома

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`albumID` | string | ID плейлиста  |

**Returns:** *Promise‹Track[]›*

Массив с треками альбома

___

### `Const` findContentByURL

▸ **findContentByURL**(`url`: string): *Promise‹Track[]›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:172

Принимает ссылку на контент и возвращает массив с найденным контентом

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | Ссылка на контент  |

**Returns:** *Promise‹Track[]›*

Массив с треками

___

### `Const` findPlaylist

▸ **findPlaylist**(`username`: string, `playlistID`: string): *Promise‹Track[]›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:107

Принимает идентификаторы плейлиста и возвращает треки из плейлиста

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`username` | string | Имя владельца плейлиста |
`playlistID` | string | ID плейлиста  |

**Returns:** *Promise‹Track[]›*

Массив с треками плейлиста

___

### `Const` findTrack

▸ **findTrack**(`trackID`: string): *Promise‹Track[]›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:45

Принимает идентификатор трека и возвращает трек

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`trackID` | string | ID трека |

**Returns:** *Promise‹Track[]›*

Массив с треком

___

### `Const` findTrackByName

▸ **findTrackByName**(`trackName`: string): *Promise‹Track›*

Defined in Documents/GitHub/yamb/src/services/track.service.ts:140

Принимает название трека и возвращает результат поиска

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`trackName` | string | Название трека |

**Returns:** *Promise‹Track›*

Результат поиска трека по названию

___

###  getArguments

▸ **getArguments**(`str`: string): *string[]*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:139

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string[]*

___

###  getCommandName

▸ **getCommandName**(`content`: string): *string | null*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |

**Returns:** *string | null*

___

### `Const` help

▸ **help**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/help.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` isAlbumURL

▸ **isAlbumURL**(`url`: string): *boolean*

Defined in Documents/GitHub/yamb/src/utils/inspectURL.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Const` isPlaylistURL

▸ **isPlaylistURL**(`url`: string): *boolean*

Defined in Documents/GitHub/yamb/src/utils/inspectURL.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Const` isTrackURL

▸ **isTrackURL**(`url`: string): *boolean*

Defined in Documents/GitHub/yamb/src/utils/inspectURL.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Const` isURL

▸ **isURL**(`url`: string): *boolean*

Defined in Documents/GitHub/yamb/src/utils/inspectURL.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Const` isYandexURL

▸ **isYandexURL**(`url`: string): *boolean*

Defined in Documents/GitHub/yamb/src/utils/inspectURL.ts:2

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

### `Const` join

▸ **join**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/join.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` joinUserChannel

▸ **joinUserChannel**(`msg`: Message): *Promise‹VoiceConnection›*

Defined in Documents/GitHub/yamb/src/utils/joinUserChannel.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`msg` | Message |

**Returns:** *Promise‹VoiceConnection›*

___

### `Const` list

▸ **list**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/list.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` move

▸ **move**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/move.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` np

▸ **np**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/np.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

###  parse

▸ **parse**<**MT**>(`message`: Message, `prefix`: string | string[], `options`: [ParserOptions](#interfacesparseroptionsmd)): *[ParsedMessage](#interfacesparsedmessagemd)‹MT›*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:147

**Type parameters:**

▪ **MT**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | Message | - |
`prefix` | string &#124; string[] | - |
`options` | [ParserOptions](#interfacesparseroptionsmd) | {} |

**Returns:** *[ParsedMessage](#interfacesparsedmessagemd)‹MT›*

___

### `Const` pause

▸ **pause**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/pause.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` play

▸ **play**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/play.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` remove

▸ **remove**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/remove.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` repeat

▸ **repeat**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/repeat.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` secondsToTimestamp

▸ **secondsToTimestamp**(`time`: number): *string*

Defined in Documents/GitHub/yamb/src/utils/secondsToTimestamp.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |

**Returns:** *string*

___

### `Const` shuffle

▸ **shuffle**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/shuffle.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` skip

▸ **skip**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/skip.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` stop

▸ **stop**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/stop.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` time

▸ **time**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/time.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

___

### `Const` volume

▸ **volume**(`cmd`: [ParsedMessage](#interfacesparsedmessagemd), `msg`: Message, `bot`: [Bot](#interfacesbotmd)): *Promise‹void›*

Defined in Documents/GitHub/yamb/src/api/volume.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | [ParsedMessage](#interfacesparsedmessagemd) |
`msg` | Message |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *Promise‹void›*

## Object literals

### `Const` DefaultBotConfig

### ▪ **DefaultBotConfig**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:31

▪ **auto**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:32

* **deafen**: *false* = false

* **pause**: *false* = false

* **play**: *false* = false

* **reconnect**: *true* = true

▪ **command**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:44

* **symbol**: *string* = process.env.PREFIX

▪ **discord**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:39

* **log**: *true* = true

* **token**: *string* = process.env.BOT_TOKEN

▪ **queue**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:48

* **announce**: *true* = true

* **repeat**: *false* = false

▪ **stream**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:53

* **bitrate**: *"auto"* = "auto"

* **passes**: *number* = 3

* **seek**: *number* = 0

* **volume**: *number* = 1


<a name="readmemd"></a>

[discord-yamusic](#globalsmd)

# discord-yamusic


# Classes


<a name="classesbotcommandmapmd"></a>

[discord-yamusic](#globalsmd) › [BotCommandMap](#classesbotcommandmapmd)

## Class: BotCommandMap

### Hierarchy

* [Map](#static-map)‹string, Function[]›

  ↳ **BotCommandMap**

### Index

#### Properties

* [[Symbol.toStringTag]](botcommandmap.md#readonly-[symbol.tostringtag])
* [size](#readonly-size)
* [Map](#static-map)

#### Methods

* [[Symbol.iterator]](botcommandmap.md#[symbol.iterator])
* [clear](#clear)
* [delete](#delete)
* [entries](#entries)
* [forEach](#foreach)
* [get](#get)
* [has](#has)
* [keys](#keys)
* [off](#off)
* [on](#on)
* [set](#set)
* [values](#values)

### Properties

#### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[[Symbol.toStringTag]](botcommandmap.md#readonly-[symbol.tostringtag])*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

#### `Readonly` size

• **size**: *number*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[size](#readonly-size)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

#### `Static` Map

▪ **Map**: *MapConstructor*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:36

### Methods

####  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[string, Function[]]›*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[[Symbol.iterator]](botcommandmap.md#[symbol.iterator])*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[string, Function[]]›*

___

####  clear

▸ **clear**(): *void*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[clear](#clear)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

####  delete

▸ **delete**(`key`: string): *boolean*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[delete](#delete)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

####  entries

▸ **entries**(): *IterableIterator‹[string, Function[]]›*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[entries](#entries)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[string, Function[]]›*

___

####  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[forEach](#foreach)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Function[], `key`: string, `map`: [Map](#static-map)‹string, Function[]›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Function[] |
`key` | string |
`map` | [Map](#static-map)‹string, Function[]› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

####  get

▸ **get**(`key`: string): *Function[] | undefined*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[get](#get)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Function[] | undefined*

___

####  has

▸ **has**(`key`: string): *boolean*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[has](#has)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

####  keys

▸ **keys**(): *IterableIterator‹string›*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[keys](#keys)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹string›*

___

####  off

▸ **off**(`cmd`: string, `handler?`: Function): *this*

Defined in Documents/GitHub/yamb/src/core/BotCommandMap.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |
`handler?` | Function |

**Returns:** *this*

___

####  on

▸ **on**(`cmd`: string, `handler`: Function): *this*

Defined in Documents/GitHub/yamb/src/core/BotCommandMap.ts:2

**Parameters:**

Name | Type |
------ | ------ |
`cmd` | string |
`handler` | Function |

**Returns:** *this*

___

####  set

▸ **set**(`key`: string, `value`: Function[]): *this*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[set](#set)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | Function[] |

**Returns:** *this*

___

####  values

▸ **values**(): *IterableIterator‹Function[]›*

*Inherited from [BotCommandMap](#classesbotcommandmapmd).[values](#values)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹Function[]›*


<a name="classesbotconsolereadermd"></a>

[discord-yamusic](#globalsmd) › [BotConsoleReader](#classesbotconsolereadermd)

## Class: BotConsoleReader

### Hierarchy

* **BotConsoleReader**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [commands](#commands)

#### Methods

* [listen](#listen)

### Constructors

####  constructor

\+ **new BotConsoleReader**(): *[BotConsoleReader](#classesbotconsolereadermd)*

Defined in Documents/GitHub/yamb/src/core/BotConsoleReader.ts:9

**Returns:** *[BotConsoleReader](#classesbotconsolereadermd)*

### Properties

####  commands

• **commands**: *[BotCommandMap](#classesbotcommandmapmd)*

Defined in Documents/GitHub/yamb/src/core/BotConsoleReader.ts:9

### Methods

####  listen

▸ **listen**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotConsoleReader.ts:15

**Returns:** *void*


<a name="classesbotstatusmd"></a>

[discord-yamusic](#globalsmd) › [BotStatus](#classesbotstatusmd)

## Class: BotStatus

### Hierarchy

* **BotStatus**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [client](#private-client)

#### Methods

* [setActivity](#setactivity)
* [setBanner](#setbanner)

### Constructors

####  constructor

\+ **new BotStatus**(`client`: Client): *[BotStatus](#classesbotstatusmd)*

Defined in Documents/GitHub/yamb/src/core/BotStatus.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`client` | Client |

**Returns:** *[BotStatus](#classesbotstatusmd)*

### Properties

#### `Private` client

• **client**: *Client*

Defined in Documents/GitHub/yamb/src/core/BotStatus.ts:4

### Methods

####  setActivity

▸ **setActivity**(`activity`: PresenceStatus): *void*

Defined in Documents/GitHub/yamb/src/core/BotStatus.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`activity` | PresenceStatus |

**Returns:** *void*

___

####  setBanner

▸ **setBanner**(`status`: string): *void*

Defined in Documents/GitHub/yamb/src/core/BotStatus.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`status` | string |

**Returns:** *void*


<a name="classesmediaplayermd"></a>

[discord-yamusic](#globalsmd) › [MediaPlayer](#classesmediaplayermd)

## Class: MediaPlayer

### Hierarchy

* **MediaPlayer**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [channel](#optional-channel)
* [config](#config)
* [connection](#optional-connection)
* [dispatcher](#optional-dispatcher)
* [nowPlaying](#optional-nowplaying)
* [paused](#paused)
* [playing](#playing)
* [queue](#queue)
* [status](#status)
* [stopping](#stopping)
* [typeRegistry](#typeregistry)

#### Methods

* [addMedia](#addmedia)
* [at](#at)
* [clear](#clear)
* [dispatchStream](#dispatchstream)
* [getVolume](#getvolume)
* [move](#move)
* [pause](#pause)
* [play](#play)
* [remove](#remove)
* [setVolume](#setvolume)
* [shuffle](#shuffle)
* [skip](#skip)
* [stop](#stop)

### Constructors

####  constructor

\+ **new MediaPlayer**(`config`: [BotConfig](#interfacesbotconfigmd), `status`: [BotStatus](#classesbotstatusmd)): *[MediaPlayer](#classesmediaplayermd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`config` | [BotConfig](#interfacesbotconfigmd) |
`status` | [BotStatus](#classesbotstatusmd) |

**Returns:** *[MediaPlayer](#classesmediaplayermd)*

### Properties

#### `Optional` channel

• **channel**? : *TextChannel | DMChannel | GroupDMChannel*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:36

___

####  config

• **config**: *[BotConfig](#interfacesbotconfigmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:26

___

#### `Optional` connection

• **connection**? : *VoiceConnection*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:38

___

#### `Optional` dispatcher

• **dispatcher**? : *StreamDispatcher*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:40

___

#### `Optional` nowPlaying

• **nowPlaying**? : *[MediaItem](#interfacesmediaitemmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:28

___

####  paused

• **paused**: *boolean* = false

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:32

___

####  playing

• **playing**: *boolean* = false

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:30

___

####  queue

• **queue**: *[MediaQueue](#classesmediaqueuemd)* = new MediaQueue()

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:22

___

####  status

• **status**: *[BotStatus](#classesbotstatusmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:24

___

####  stopping

• **stopping**: *boolean* = false

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:34

___

####  typeRegistry

• **typeRegistry**: *[Map](#static-map)‹string, [MediaType](#interfacesmediatypemd)›* = new Map<string, MediaType>()

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:20

### Methods

####  addMedia

▸ **addMedia**(`items`: [MediaItem](#interfacesmediaitemmd)[]): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`items` | [MediaItem](#interfacesmediaitemmd)[] |

**Returns:** *void*

___

####  at

▸ **at**(`idx`: number): *[MediaItem](#interfacesmediaitemmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

___

####  clear

▸ **clear**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:224

**Returns:** *void*

___

####  dispatchStream

▸ **dispatchStream**(`stream`: string, `item`: [MediaItem](#interfacesmediaitemmd)): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`stream` | string |
`item` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *void*

___

####  getVolume

▸ **getVolume**(): *string*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:214

**Returns:** *string*

___

####  move

▸ **move**(`currentIdx`: number, `targetIdx`: number): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:192

**Parameters:**

Name | Type |
------ | ------ |
`currentIdx` | number |
`targetIdx` | number |

**Returns:** *void*

___

####  pause

▸ **pause**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:182

**Returns:** *void*

___

####  play

▸ **play**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:120

**Returns:** *void*

___

####  remove

▸ **remove**(`item`: [MediaItem](#interfacesmediaitemmd)): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:218

**Parameters:**

Name | Type |
------ | ------ |
`item` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *void*

___

####  setVolume

▸ **setVolume**(`volume`: number): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:206

**Parameters:**

Name | Type |
------ | ------ |
`volume` | number |

**Returns:** *void*

___

####  shuffle

▸ **shuffle**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:148

**Returns:** *void*

___

####  skip

▸ **skip**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:166

**Returns:** *void*

___

####  stop

▸ **stop**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaPlayer.ts:152

**Returns:** *void*


<a name="classesmediaqueuemd"></a>

[discord-yamusic](#globalsmd) › [MediaQueue](#classesmediaqueuemd)

## Class: MediaQueue

### Hierarchy

* [Array](#static-array)‹[MediaItem](#interfacesmediaitemmd)›

  ↳ **MediaQueue**

### Indexable

* \[ **n**: *number*\]: [MediaItem](#interfacesmediaitemmd)

### Index

#### Properties

* [length](#length)
* [Array](#static-array)

#### Accessors

* [first](#first)
* [last](#last)

#### Methods

* [[Symbol.iterator]](mediaqueue.md#[symbol.iterator])
* [[Symbol.unscopables]](mediaqueue.md#[symbol.unscopables])
* [clear](#clear)
* [concat](#concat)
* [copyWithin](#copywithin)
* [dequeue](#dequeue)
* [enqueue](#enqueue)
* [entries](#entries)
* [every](#every)
* [fill](#fill)
* [filter](#filter)
* [find](#find)
* [findIndex](#findindex)
* [forEach](#foreach)
* [includes](#includes)
* [indexOf](#indexof)
* [join](#join)
* [keys](#keys)
* [lastIndexOf](#lastindexof)
* [map](#map)
* [move](#move)
* [pop](#pop)
* [push](#push)
* [reduce](#reduce)
* [reduceRight](#reduceright)
* [reverse](#reverse)
* [shift](#shift)
* [shuffle](#shuffle)
* [slice](#slice)
* [some](#some)
* [sort](#sort)
* [splice](#splice)
* [toLocaleString](#tolocalestring)
* [toString](#tostring)
* [unshift](#unshift)
* [values](#values)

### Properties

####  length

• **length**: *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[length](#length)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

#### `Static` Array

▪ **Array**: *ArrayConstructor*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1385

### Accessors

####  first

• **get first**(): *[MediaItem](#interfacesmediaitemmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:4

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

___

####  last

• **get last**(): *[MediaItem](#interfacesmediaitemmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:8

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

### Methods

####  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[MediaItem](#interfacesmediaitemmd)›*

*Inherited from [MediaQueue](#classesmediaqueuemd).[[Symbol.iterator]](mediaqueue.md#[symbol.iterator])*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹[MediaItem](#interfacesmediaitemmd)›*

___

####  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from [MediaQueue](#classesmediaqueuemd).[[Symbol.unscopables]](mediaqueue.md#[symbol.unscopables])*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

* **copyWithin**: *boolean*

* **entries**: *boolean*

* **fill**: *boolean*

* **find**: *boolean*

* **findIndex**: *boolean*

* **keys**: *boolean*

* **values**: *boolean*

___

####  clear

▸ **clear**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:45

**Returns:** *void*

___

####  concat

▸ **concat**(...`items`: ConcatArray‹[MediaItem](#interfacesmediaitemmd)›[]): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[concat](#concat)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[MediaItem](#interfacesmediaitemmd)›[] | Additional items to add to the end of array1.  |

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[concat](#concat)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

___

####  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [MediaQueue](#classesmediaqueuemd).[copyWithin](#copywithin)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.core.d.ts:64

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

####  dequeue

▸ **dequeue**(`item?`: [MediaItem](#interfacesmediaitemmd)): *[MediaItem](#interfacesmediaitemmd)*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`item?` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

___

####  enqueue

▸ **enqueue**(`item`: [MediaItem](#interfacesmediaitemmd)): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`item` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *void*

___

####  entries

▸ **entries**(): *IterableIterator‹[number, [MediaItem](#interfacesmediaitemmd)]›*

*Inherited from [MediaQueue](#classesmediaqueuemd).[entries](#entries)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, [MediaItem](#interfacesmediaitemmd)]›*

___

####  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [MediaQueue](#classesmediaqueuemd).[every](#every)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

####  fill

▸ **fill**(`value`: [MediaItem](#interfacesmediaitemmd), `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from [MediaQueue](#classesmediaqueuemd).[fill](#fill)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

####  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[filter](#filter)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[filter](#filter)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

___

####  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [MediaQueue](#classesmediaqueuemd).[find](#find)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `obj`: [MediaItem](#interfacesmediaitemmd)[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`obj` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *[MediaItem](#interfacesmediaitemmd) | undefined*

*Inherited from [MediaQueue](#classesmediaqueuemd).[find](#find)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `obj`: [MediaItem](#interfacesmediaitemmd)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`obj` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *[MediaItem](#interfacesmediaitemmd) | undefined*

___

####  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[findIndex](#findindex)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `obj`: [MediaItem](#interfacesmediaitemmd)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`obj` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

####  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MediaQueue](#classesmediaqueuemd).[forEach](#foreach)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

####  includes

▸ **includes**(`searchElement`: [MediaItem](#interfacesmediaitemmd), `fromIndex?`: undefined | number): *boolean*

*Inherited from [MediaQueue](#classesmediaqueuemd).[includes](#includes)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [MediaItem](#interfacesmediaitemmd) | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

####  indexOf

▸ **indexOf**(`searchElement`: [MediaItem](#interfacesmediaitemmd), `fromIndex?`: undefined | number): *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[indexOf](#indexof)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [MediaItem](#interfacesmediaitemmd) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

####  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [MediaQueue](#classesmediaqueuemd).[join](#join)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

####  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from [MediaQueue](#classesmediaqueuemd).[keys](#keys)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

####  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [MediaItem](#interfacesmediaitemmd), `fromIndex?`: undefined | number): *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[lastIndexOf](#lastindexof)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [MediaItem](#interfacesmediaitemmd) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

####  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[map](#map)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

####  move

▸ **move**(`from`: number, `to`: number): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

**Returns:** *void*

___

####  pop

▸ **pop**(): *[MediaItem](#interfacesmediaitemmd) | undefined*

*Inherited from [MediaQueue](#classesmediaqueuemd).[pop](#pop)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *[MediaItem](#interfacesmediaitemmd) | undefined*

___

####  push

▸ **push**(...`items`: [MediaItem](#interfacesmediaitemmd)[]): *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[push](#push)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [MediaItem](#interfacesmediaitemmd)[] | New elements of the Array.  |

**Returns:** *number*

___

####  reduce

▸ **reduce**(`callbackfn`: function): *[MediaItem](#interfacesmediaitemmd)*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduce](#reduce)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [MediaItem](#interfacesmediaitemmd), `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [MediaItem](#interfacesmediaitemmd) |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

▸ **reduce**(`callbackfn`: function, `initialValue`: [MediaItem](#interfacesmediaitemmd)): *[MediaItem](#interfacesmediaitemmd)*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduce](#reduce)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [MediaItem](#interfacesmediaitemmd), `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [MediaItem](#interfacesmediaitemmd) |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪ **initialValue**: *[MediaItem](#interfacesmediaitemmd)*

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduce](#reduce)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

####  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[MediaItem](#interfacesmediaitemmd)*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduceRight](#reduceright)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [MediaItem](#interfacesmediaitemmd), `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [MediaItem](#interfacesmediaitemmd) |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [MediaItem](#interfacesmediaitemmd)): *[MediaItem](#interfacesmediaitemmd)*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduceRight](#reduceright)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [MediaItem](#interfacesmediaitemmd), `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *[MediaItem](#interfacesmediaitemmd)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [MediaItem](#interfacesmediaitemmd) |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪ **initialValue**: *[MediaItem](#interfacesmediaitemmd)*

**Returns:** *[MediaItem](#interfacesmediaitemmd)*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reduceRight](#reduceright)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [MediaItem](#interfacesmediaitemmd), `currentIndex`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [MediaItem](#interfacesmediaitemmd) |
`currentIndex` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

####  reverse

▸ **reverse**(): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[reverse](#reverse)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

___

####  shift

▸ **shift**(): *[MediaItem](#interfacesmediaitemmd) | undefined*

*Inherited from [MediaQueue](#classesmediaqueuemd).[shift](#shift)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *[MediaItem](#interfacesmediaitemmd) | undefined*

___

####  shuffle

▸ **shuffle**(): *void*

Defined in Documents/GitHub/yamb/src/core/BotMediaQueue.ts:31

**Returns:** *void*

___

####  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[slice](#slice)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

___

####  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [MediaQueue](#classesmediaqueuemd).[some](#some)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: [MediaItem](#interfacesmediaitemmd), `index`: number, `array`: [MediaItem](#interfacesmediaitemmd)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MediaItem](#interfacesmediaitemmd) |
`index` | number |
`array` | [MediaItem](#interfacesmediaitemmd)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

####  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [MediaQueue](#classesmediaqueuemd).[sort](#sort)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

####  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[splice](#splice)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [MediaItem](#interfacesmediaitemmd)[]): *[MediaItem](#interfacesmediaitemmd)[]*

*Inherited from [MediaQueue](#classesmediaqueuemd).[splice](#splice)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | [MediaItem](#interfacesmediaitemmd)[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *[MediaItem](#interfacesmediaitemmd)[]*

___

####  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [MediaQueue](#classesmediaqueuemd).[toLocaleString](#tolocalestring)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

####  toString

▸ **toString**(): *string*

*Inherited from [MediaQueue](#classesmediaqueuemd).[toString](#tostring)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1219

Returns a string representation of an array.

**Returns:** *string*

___

####  unshift

▸ **unshift**(...`items`: [MediaItem](#interfacesmediaitemmd)[]): *number*

*Inherited from [MediaQueue](#classesmediaqueuemd).[unshift](#unshift)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [MediaItem](#interfacesmediaitemmd)[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

####  values

▸ **values**(): *IterableIterator‹[MediaItem](#interfacesmediaitemmd)›*

*Inherited from [MediaQueue](#classesmediaqueuemd).[values](#values)*

Defined in AppData/Roaming/npm/node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** *IterableIterator‹[MediaItem](#interfacesmediaitemmd)›*


<a name="classesybotmd"></a>

[discord-yamusic](#globalsmd) › [YBot](#classesybotmd)

## Class: YBot

### Hierarchy

* **YBot**

### Implements

* [Bot](#interfacesbotmd)

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [client](#client)
* [commands](#commands)
* [config](#config)
* [console](#console)
* [helptext](#helptext)
* [online](#online)
* [player](#player)
* [plugins](#plugins)
* [status](#status)

#### Methods

* [connect](#connect)
* [listen](#listen)

### Constructors

####  constructor

\+ **new YBot**(`config`: [BotConfig](#interfacesbotconfigmd)): *[YBot](#classesybotmd)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`config` | [BotConfig](#interfacesbotconfigmd) |

**Returns:** *[YBot](#classesybotmd)*

### Properties

####  client

• **client**: *Client*

*Implementation of [Bot](#interfacesbotmd).[client](#client)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:34

___

####  commands

• **commands**: *[BotCommandMap](#classesbotcommandmapmd)*

*Implementation of [Bot](#interfacesbotmd).[commands](#commands)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:40

___

####  config

• **config**: *[BotConfig](#interfacesbotconfigmd)*

*Implementation of [Bot](#interfacesbotmd).[config](#config)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:36

___

####  console

• **console**: *[BotConsoleReader](#classesbotconsolereadermd)*

*Implementation of [Bot](#interfacesbotmd).[console](#console)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:42

___

####  helptext

• **helptext**: *string*

*Implementation of [Bot](#interfacesbotmd).[helptext](#helptext)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:48

___

####  online

• **online**: *boolean*

*Implementation of [Bot](#interfacesbotmd).[online](#online)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:46

___

####  player

• **player**: *BotMediaPlayer*

*Implementation of [Bot](#interfacesbotmd).[player](#player)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:44

___

####  plugins

• **plugins**: *[BotPlugin](#interfacesbotpluginmd)[]*

*Implementation of [Bot](#interfacesbotmd).[plugins](#plugins)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:50

___

####  status

• **status**: *[BotStatus](#classesbotstatusmd)*

*Implementation of [Bot](#interfacesbotmd).[status](#status)*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:38

### Methods

####  connect

▸ **connect**(): *Promise‹string›*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:142

**Returns:** *Promise‹string›*

___

####  listen

▸ **listen**(): *void*

Defined in Documents/GitHub/yamb/src/core/Bot.ts:146

**Returns:** *void*

# Enums


<a name="enumsresultcodemd"></a>

[discord-yamusic](#globalsmd) › [ResultCode](#enumsresultcodemd)

## Enumeration: ResultCode

### Index

#### Enumeration members

* [BOT_USER](#bot_user)
* [NO_APLHANUMERIC_AFTER_PREFIX](#no_aplhanumeric_after_prefix)
* [NO_BODY](#no_body)
* [NO_PREFIX_MATCH](#no_prefix_match)
* [OK](#ok)
* [SELF_MESSAGE](#self_message)
* [UNKNOWN_ERROR](#unknown_error)

### Enumeration members

####  BOT_USER

• **BOT_USER**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:99

The message received was sent by a bot account
and was ignored.

You can set the `allowBots` option to `true` to override
this behavior.

___

####  NO_APLHANUMERIC_AFTER_PREFIX

• **NO_APLHANUMERIC_AFTER_PREFIX**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:125

The message started with the prefix string, but had
a non-alphanumeric character (not in range `a-z`, `A-Z`, or `0-9`) after it, which is not allowed.

___

####  NO_BODY

• **NO_BODY**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:119

The message contained only the prefix string,
and nothing more.

___

####  NO_PREFIX_MATCH

• **NO_PREFIX_MATCH**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:113

The message does not start with the provided prefix.

___

####  OK

• **OK**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:90

No error occurred

___

####  SELF_MESSAGE

• **SELF_MESSAGE**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:108

The message received was sent by the same account
that received it and was ignored.

You can set the `allowSelf` option to `true` to override
this behavior.

___

####  UNKNOWN_ERROR

• **UNKNOWN_ERROR**:

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:132

An unknown error occurred while parsing the message,
this is likely to be a bug with discord-command-parser,
and should be reported to the Issues section on Github.

# Interfaces


<a name="interfacesbotmd"></a>

[discord-yamusic](#globalsmd) › [Bot](#interfacesbotmd)

## Interface: Bot

### Hierarchy

* **Bot**

### Implemented by

* [YBot](#classesybotmd)

### Index

#### Properties

* [client](#client)
* [commands](#commands)
* [config](#config)
* [console](#console)
* [helptext](#helptext)
* [online](#online)
* [player](#player)
* [plugins](#plugins)
* [status](#status)

### Properties

####  client

• **client**: *Client*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:10

___

####  commands

• **commands**: *[BotCommandMap](#classesbotcommandmapmd)*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:13

___

####  config

• **config**: *[BotConfig](#interfacesbotconfigmd)*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:11

___

####  console

• **console**: *[BotConsoleReader](#classesbotconsolereadermd)*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:14

___

####  helptext

• **helptext**: *string*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:17

___

####  online

• **online**: *boolean*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:18

___

####  player

• **player**: *BotMediaPlayer*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:15

___

####  plugins

• **plugins**: *[BotPlugin](#interfacesbotpluginmd)[]*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:16

___

####  status

• **status**: *[BotStatus](#classesbotstatusmd)*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:12


<a name="interfacesbotconfigmd"></a>

[discord-yamusic](#globalsmd) › [BotConfig](#interfacesbotconfigmd)

## Interface: BotConfig

### Hierarchy

* **BotConfig**

### Index

#### Properties

* [auto](#auto)
* [command](#command)
* [discord](#discord)
* [queue](#queue)
* [stream](#stream)

### Properties

####  auto

• **auto**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:2

##### Type declaration:

* **deafen**: *boolean*

* **pause**: *boolean*

* **play**: *boolean*

* **reconnect**: *boolean*

___

####  command

• **command**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:9

##### Type declaration:

* **symbol**: *string*

___

####  discord

• **discord**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:13

##### Type declaration:

* **log**? : *undefined | false | true*

* **token**: *string*

___

####  queue

• **queue**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:18

##### Type declaration:

* **announce**: *boolean*

* **repeat**: *boolean*

___

####  stream

• **stream**: *object*

Defined in Documents/GitHub/yamb/src/core/BotConfig.ts:23

##### Type declaration:

* **bitrate**: *number | "auto"*

* **passes**: *number*

* **seek**: *number*

* **volume**: *number*


<a name="interfacesbotpluginmd"></a>

[discord-yamusic](#globalsmd) › [BotPlugin](#interfacesbotpluginmd)

## Interface: BotPlugin

### Hierarchy

* **BotPlugin**

### Index

#### Methods

* [postInitialize](#postinitialize)
* [preInitialize](#preinitialize)

### Methods

####  postInitialize

▸ **postInitialize**(`bot`: [Bot](#interfacesbotmd)): *void*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *void*

___

####  preInitialize

▸ **preInitialize**(`bot`: [Bot](#interfacesbotmd)): *void*

Defined in Documents/GitHub/yamb/src/core/BotInterface.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`bot` | [Bot](#interfacesbotmd) |

**Returns:** *void*


<a name="interfacesmediaitemmd"></a>

[discord-yamusic](#globalsmd) › [MediaItem](#interfacesmediaitemmd)

## Interface: MediaItem

### Hierarchy

* **MediaItem**

### Index

#### Properties

* [albums](#albums)
* [artists](#artists)
* [duration](#duration)
* [name](#name)
* [requestor](#requestor)
* [type](#type)
* [url](#url)

### Properties

####  albums

• **albums**: *AlbumInfo[]*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:10

___

####  artists

• **artists**: *Artist[]*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:11

___

####  duration

• **duration**: *number*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:9

___

####  name

• **name**: *string*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:8

___

####  requestor

• **requestor**: *object*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:4

##### Type declaration:

* **avatarURL**: *string*

* **username**: *string*

___

####  type

• **type**: *string*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:2

___

####  url

• **url**: *string*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:3


<a name="interfacesmediatypemd"></a>

[discord-yamusic](#globalsmd) › [MediaType](#interfacesmediatypemd)

## Interface: MediaType

### Hierarchy

* **MediaType**

### Index

#### Methods

* [getDetails](#getdetails)
* [getStream](#getstream)

### Methods

####  getDetails

▸ **getDetails**(`item`: [MediaItem](#interfacesmediaitemmd)): *Promise‹[MediaItem](#interfacesmediaitemmd)›*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`item` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *Promise‹[MediaItem](#interfacesmediaitemmd)›*

___

####  getStream

▸ **getStream**(`item`: [MediaItem](#interfacesmediaitemmd)): *Promise‹string›*

Defined in Documents/GitHub/yamb/src/core/BotMedia.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`item` | [MediaItem](#interfacesmediaitemmd) |

**Returns:** *Promise‹string›*


<a name="interfacesparsedmessagemd"></a>

[discord-yamusic](#globalsmd) › [ParsedMessage](#interfacesparsedmessagemd)

## Interface: ParsedMessage <**MT**>

### Type parameters

▪ **MT**

### Hierarchy

* **ParsedMessage**

### Index

#### Properties

* [arguments](#arguments)
* [body](#body)
* [code](#code)
* [command](#command)
* [error](#optional-error)
* [message](#message)
* [prefix](#prefix)
* [success](#success)

### Properties

####  arguments

• **arguments**: *string[]*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:50

The arguments (if any) that followed the command.

These are delimited by any whitespace, unless words are
in 'single quotes', "qouble quotes",
or \`\`\`code blocks\`\`\`. Full "\"backslash\" support"
is included.

___

####  body

• **body**: *string*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:78

The unparsed body of the message
following the `command`.

___

####  code

• **code**: *[ResultCode](#enumsresultcodemd)*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:72

A number indicating the result of the parsing.

The enum is exported top-level as `ResultCode`.

```
OK: 0
BOT_USER: 1
SELF_MESSAGE: 2
NO_PREFIX_MATCH: 3
NO_BODY: 4
NO_APLHANUMERIC_AFTER_PREFIX: 5
UNKNOWN_ERROR: 6
```

___

####  command

• **command**: *string*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:40

The command (first word or "quoted block") immediately
following the prefix in the message.

___

#### `Optional` error

• **error**? : *undefined | string*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:55

If `success` is `false`, this is a detailed reason.

___

####  message

• **message**: *MT*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:83

The message that was passed to the parser.

___

####  prefix

• **prefix**: *string*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:34

The prefix that the message started with, this is
redundant to the prefix that was provided to `parse()`.

___

####  success

• **success**: *boolean*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:28

Whether the message passed all checks and appears to
be a well-formed command.


<a name="interfacesparseroptionsmd"></a>

[discord-yamusic](#globalsmd) › [ParserOptions](#interfacesparseroptionsmd)

## Interface: ParserOptions

### Hierarchy

* **ParserOptions**

### Index

#### Properties

* [allowBots](#optional-allowbots)
* [allowSelf](#optional-allowself)

### Properties

#### `Optional` allowBots

• **allowBots**? : *undefined | false | true*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:20

If `true`, the parser will consider messages that were
sent by bot accounts.

Default: `false`

___

#### `Optional` allowSelf

• **allowSelf**? : *undefined | false | true*

Defined in Documents/GitHub/yamb/src/core/BotCommandParser.ts:12

If `true`, the parser will consider messages that were
sent by the same client that received it.

This option is only really useful for selfbots.

Default: `false`
