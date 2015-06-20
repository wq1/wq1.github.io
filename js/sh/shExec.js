(function () {
  'use strict';

  SyntaxHighlighter.autoloader(
    ['applescript',                  '../../js/sh/shBrushAppleScript.js'],
    ['actionscript3', 'as3',         '../../js/sh/shBrushAS3.js'        ],
    ['bash', 'shell',                '../../js/sh/shBrushBash.js'       ],
    ['coldfusion', 'cf',             '../../js/sh/shBrushColdFusion.js' ],
    ['cpp', 'c',                     '../../js/sh/shBrushCpp.js'        ],
    ['c#', 'c-sharp', 'csharp',      '../../js/sh/shBrushCSharp.js'     ],
    ['css',                          '../../js/sh/shBrushCss.js'        ],
    ['delphi', 'pascal',             '../../js/sh/shBrushDelphi.js'     ],
    ['diff', 'patch', 'pas',         '../../js/sh/shBrushDiff.js'       ],
    ['erl', 'erlang',                '../../js/sh/shBrushErlang.js'     ],
    ['groovy',                       '../../js/sh/shBrushGroovy.js'     ],
    ['java',                         '../../js/sh/shBrushJava.js'       ],
    ['jfx', 'javafx',                '../../js/sh/shBrushJavaFX.js'     ],
    ['js', 'jscript', 'javascript',  '../../js/sh/shBrushJScript.js'    ],
    ['perl', 'pl',                   '../../js/sh/shBrushPerl.js'       ],
    ['php',                          '../../js/sh/shBrushPhp.js'        ],
    ['text', 'plain',                '../../js/sh/shBrushPlain.js'      ],
    ['py', 'python',                 '../../js/sh/shBrushPython.js'     ],
    ['ruby', 'rails', 'ror', 'rb',   '../../js/sh/shBrushRuby.js'       ],
    ['scala',                        '../../js/sh/shBrushScala.js'      ],
    ['sql',                          '../../js/sh/shBrushSql.js'        ],
    ['vb', 'vbnet',                  '../../js/sh/shBrushVb.js'         ],
    ['xml', 'xhtml', 'xslt', 'html', '../../js/sh/shBrushXml.js'        ]
  );

  SyntaxHighlighter.all();
}());
