// Javascript code generated from ast
var $B = __BRYTHON__,
    _b_ = $B.builtins,
    locals_exec = $B.imported["exec"],
    locals = locals_exec,
    frame = ["exec", locals, "exec", locals]
frame.__file__ = '<string>'
locals.__name__ = 'exec'
locals.__doc__ = _b_.None
locals.__annotations__ = locals.__annotations__ || $B.empty_dict()
locals.$f_trace = $B.enter_frame(frame)
$B.set_lineno(frame, 1)

var _frames = $B.frames_stack.slice()
var stack_length = $B.frames_stack.length
try{
  $B.set_lineno(frame, 1)
  var module = $B.$import_from("browser", ["document", "html", "window"], {}, 0, locals);
  $B.set_lineno(frame, 2)
  var module = $B.$import_from("javascript", ["Math"], {}, 0, locals);
  $B.set_lineno(frame, 4)
  var bestbad$2749 = function(defaults){
    function bestbad2749(){
      var locals_exec_bestbad,
          locals
      locals_exec_bestbad = locals = $B.args("bestbad", 1, {array: null} , ['array'], arguments, defaults, null, null)
      var frame = ["bestbad", locals, "exec", locals_exec, bestbad2749]
      frame.__file__ = '<string>'
      frame.$lineno = 4
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 5)
        var v2742 = $B.$call(_b_.len, [15, 15, 25])(locals_exec_bestbad.array)
        locals_exec_bestbad.minIndex = v2742
        $B.set_lineno(frame, 6)
        var v2743 = 10000
        locals_exec_bestbad.minNumber = v2743
        var no_break_2744 = true
        for(var next_2744 of $B.next_of1($B.$call(_b_.range, [13, 13, 33])(0, $B.$call(_b_.len, [22, 22, 32])(locals_exec_bestbad.array)), frame, 7)){
          var v2745 = next_2744
          locals_exec_bestbad.i = v2745
          $B.set_lineno(frame, 8);
          $B.$call(_b_.print, [9, 9, 27])($B.$getitem($B.$getitem(locals_exec_bestbad.array, locals_exec_bestbad.i, [15, 21, 22]), 1, [15, 24, 25]))
          if($B.set_lineno(frame, 9) && $B.$bool($B.rich_comp('__lt__', $B.$call(_b_.float, [13, 13, 31])($B.$getitem($B.$getitem(locals_exec_bestbad.array, locals_exec_bestbad.i, [19, 25, 26]), 1, [19, 28, 29])), locals_exec_bestbad.minNumber))){
            $B.set_lineno(frame, 10)
            var v2746 = locals_exec_bestbad.i
            locals_exec_bestbad.minIndex = v2746
            $B.set_lineno(frame, 11)
            var v2748 = $B.$call(_b_.float, [26, 26, 44])($B.$getitem($B.$getitem(locals_exec_bestbad.array, locals_exec_bestbad.i, [32, 38, 39]), 1, [32, 41, 42]))
            locals_exec_bestbad.minNumber = v2748
          }
        }
        $B.set_lineno(frame, 12)
        var result = $B.$getitem($B.$getitem(locals_exec_bestbad.array, locals_exec_bestbad.minIndex, [11, 17, 25]), 0, [11, 27, 28])
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_bestbad.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    bestbad2749.$is_func = true
    bestbad2749.$infos = {
      __name__: "bestbad", __qualname__: "bestbad",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 4,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'bestbad',
        co_nlocals: 4,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['array','minIndex','minNumber','i'])
      }
    }
    return bestbad2749
  }
  locals_exec.bestbad = bestbad$2749({})
  locals_exec.bestbad.$set_defaults = function(value){
    return locals_exec.bestbad = bestbad$2749(value)
  }
  locals_exec.bestbad.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 14)
  var is_upper$2750 = function(defaults){
    function is_upper2750(){
      var locals_exec_is_upper,
          locals
      locals_exec_is_upper = locals = $B.args("is_upper", 1, {piece: null} , ['piece'], arguments, defaults, null, null)
      var frame = ["is_upper", locals, "exec", locals_exec, is_upper2750]
      frame.__file__ = '<string>'
      frame.$lineno = 14
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 15) && $B.$bool($B.rich_comp('__eq__', locals_exec_is_upper.piece, $B.String(" ")))){
          $B.set_lineno(frame, 16)
          var result = locals_exec_is_upper.piece
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          $B.set_lineno(frame, 17)
          var result = $B.$call($B.$getattr_pep657(locals_exec_is_upper.piece, 'upper', [17, 17, 28]), [23, 23, 30])()
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_is_upper.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    is_upper2750.$is_func = true
    is_upper2750.$infos = {
      __name__: "is_upper", __qualname__: "is_upper",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 14,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'is_upper',
        co_nlocals: 1,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece'])
      }
    }
    return is_upper2750
  }
  locals_exec.is_upper = is_upper$2750({})
  locals_exec.is_upper.$set_defaults = function(value){
    return locals_exec.is_upper = is_upper$2750(value)
  }
  locals_exec.is_upper.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 19)
  var append_to_jornal$2751 = function(defaults){
    function append_to_jornal2751(){
      var locals_exec_append_to_jornal,
          locals
      locals_exec_append_to_jornal = locals = $B.args("append_to_jornal", 1, {message: null} , ['message'], arguments, defaults, null, null)
      var frame = ["append_to_jornal", locals, "exec", locals_exec, append_to_jornal2751]
      frame.__file__ = '<string>'
      frame.$lineno = 19
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 20);
        $B.$call(_b_.print, [4, 4, 18])(locals_exec_append_to_jornal.message)
        $B.set_lineno(frame, 21)
        var result = 1
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_append_to_jornal.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    append_to_jornal2751.$is_func = true
    append_to_jornal2751.$infos = {
      __name__: "append_to_jornal", __qualname__: "append_to_jornal",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 19,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'append_to_jornal',
        co_nlocals: 1,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['message'])
      }
    }
    return append_to_jornal2751
  }
  locals_exec.append_to_jornal = append_to_jornal$2751({})
  locals_exec.append_to_jornal.$set_defaults = function(value){
    return locals_exec.append_to_jornal = append_to_jornal$2751(value)
  }
  locals_exec.append_to_jornal.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 23)
  var cost$2757 = function(defaults){
    function cost2757(){
      var locals_exec_cost,
          locals
      locals_exec_cost = locals = $B.args("cost", 1, {piece: null} , ['piece'], arguments, defaults, null, null)
      var frame = ["cost", locals, "exec", locals_exec, cost2757]
      frame.__file__ = '<string>'
      frame.$lineno = 23
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 24)
        var v2752 = $B.String("QKPRNB ")
        locals_exec_cost.string1 = v2752
        $B.set_lineno(frame, 25)
        var v2753 = $B.String("9015330")
        locals_exec_cost.string2 = v2753
        var no_break_2754 = true
        for(var next_2754 of $B.next_of1($B.$call(_b_.range, [13, 13, 24])(0, 7), frame, 26)){
          var v2755 = next_2754
          locals_exec_cost.i = v2755
          if($B.set_lineno(frame, 27) && $B.$bool($B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_cost.piece, 'upper', [13, 13, 24]), [19, 19, 26])(), $B.$getitem(locals_exec_cost.string1, locals_exec_cost.i, [30, 38, 39])))){
            $B.set_lineno(frame, 27)
            var result = $B.$call(_b_.int, [50, 50, 65])($B.$getitem(locals_exec_cost.string2, locals_exec_cost.i, [54, 62, 63]))
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_cost.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    cost2757.$is_func = true
    cost2757.$infos = {
      __name__: "cost", __qualname__: "cost",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 23,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'cost',
        co_nlocals: 4,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','string1','string2','i'])
      }
    }
    return cost2757
  }
  locals_exec.cost = cost$2757({})
  locals_exec.cost.$set_defaults = function(value){
    return locals_exec.cost = cost$2757(value)
  }
  locals_exec.cost.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 29)
  var what_capture$2764 = function(defaults){
    function what_capture2764(){
      var locals_exec_what_capture,
          locals
      locals_exec_what_capture = locals = $B.args("what_capture", 2, {pos: null, sq: null} , ['pos', 'sq'], arguments, defaults, null, null)
      var frame = ["what_capture", locals, "exec", locals_exec, what_capture2764]
      frame.__file__ = '<string>'
      frame.$lineno = 29
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 30)
        var v2758 = 10
        locals_exec_what_capture.minCost = v2758
        var no_break_2759 = true
        for(var next_2759 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 31)){
          var v2760 = next_2759
          locals_exec_what_capture.i = v2760
          if($B.set_lineno(frame, 32) && $B.$bool($B.$call($B.resolve_in_scopes('chessmove', [locals_exec_what_capture,locals_exec,_b_], [11,11,20]), [11, 11, 40])($B.$getitem(locals_exec_what_capture.pos, locals_exec_what_capture.i, [21, 25, 26]), locals_exec_what_capture.i, locals_exec_what_capture.sq, locals_exec_what_capture.pos))){
            $B.set_lineno(frame, 33)
            var v2762 = $B.$call(locals_exec.cost, [26, 26, 38])($B.$getitem(locals_exec_what_capture.pos, locals_exec_what_capture.i, [31, 35, 36]))
            locals_exec_what_capture.whatCost = v2762
            if($B.set_lineno(frame, 34) && $B.$bool($B.rich_comp('__lt__', locals_exec_what_capture.whatCost, locals_exec_what_capture.minCost))){
              $B.set_lineno(frame, 34)
              var v2763 = locals_exec_what_capture.whatCost
              locals_exec_what_capture.minCost = v2763
            }
          }
        }
        $B.set_lineno(frame, 35)
        var result = locals_exec_what_capture.minCost
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_what_capture.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    what_capture2764.$is_func = true
    what_capture2764.$infos = {
      __name__: "what_capture", __qualname__: "what_capture",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 29,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'what_capture',
        co_nlocals: 5,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','sq','minCost','i','whatCost'])
      }
    }
    return what_capture2764
  }
  locals_exec.what_capture = what_capture$2764({})
  locals_exec.what_capture.$set_defaults = function(value){
    return locals_exec.what_capture = what_capture$2764(value)
  }
  locals_exec.what_capture.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 37)
  var my_piece$2765 = function(defaults){
    function my_piece2765(){
      var locals_exec_my_piece,
          locals
      locals_exec_my_piece = locals = $B.args("my_piece", 1, {piece: null} , ['piece'], arguments, defaults, null, null)
      var frame = ["my_piece", locals, "exec", locals_exec, my_piece2765]
      frame.__file__ = '<string>'
      frame.$lineno = 37
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 38) && $B.$bool($B.rich_op('__mod__', $B.resolve_in_scopes('move', [locals_exec_my_piece,locals_exec,_b_], [7,7,11]), 2, [7, 12, 13, 15]))){
          $B.set_lineno(frame, 40)
          var result = $B.$call($B.$getattr_pep657(locals_exec_my_piece.piece, 'upper', [14, 14, 25]), [20, 20, 27])()
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          $B.set_lineno(frame, 43)
          var result = $B.$call($B.$getattr_pep657(locals_exec_my_piece.piece, 'lower', [14, 14, 25]), [20, 20, 27])()
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_my_piece.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    my_piece2765.$is_func = true
    my_piece2765.$infos = {
      __name__: "my_piece", __qualname__: "my_piece",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 37,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'my_piece',
        co_nlocals: 1,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece'])
      }
    }
    return my_piece2765
  }
  locals_exec.my_piece = my_piece$2765({})
  locals_exec.my_piece.$set_defaults = function(value){
    return locals_exec.my_piece = my_piece$2765(value)
  }
  locals_exec.my_piece.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 45)
  var add_something$2766 = function(defaults){
    function add_something2766(){
      var locals_exec_add_something,
          locals
      locals_exec_add_something = locals = $B.args("add_something", 2, {s1: null, s2: null} , ['s1', 's2'], arguments, defaults, null, null)
      var frame = ["add_something", locals, "exec", locals_exec, add_something2766]
      frame.__file__ = '<string>'
      frame.$lineno = 45
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 47) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657($B.$getitem($B.resolve_global('a', _frames), locals_exec_add_something.s1, [8, 10, 12]), 'upper', [8, 8, 19]), [14, 14, 21])(), $B.String("P"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__gt__', locals_exec_add_something.s2, 55)) ? locals.$test : $B.rich_comp('__lt__', locals_exec_add_something.s2, 8))))){
          $B.set_lineno(frame, 47)
          var result = $B.$call(locals_exec.my_piece, [68, 68, 81])($B.String("Q"))
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 48)
        var result = $B.String('')
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_add_something.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    add_something2766.$is_func = true
    add_something2766.$infos = {
      __name__: "add_something", __qualname__: "add_something",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 45,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'add_something',
        co_nlocals: 2,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['s1','s2'])
      }
    }
    return add_something2766
  }
  locals_exec.add_something = add_something$2766({})
  locals_exec.add_something.$set_defaults = function(value){
    return locals_exec.add_something = add_something$2766(value)
  }
  locals_exec.add_something.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 50)
  var show_board$2773 = function(defaults){
    function show_board2773(){
      var locals_exec_show_board,
          locals
      locals_exec_show_board = locals = $B.args("show_board", 1, {board: null} , ['board'], arguments, defaults, null, null)
      var frame = ["show_board", locals, "exec", locals_exec, show_board2773]
      frame.__file__ = '<string>'
      frame.$lineno = 50
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 51)
        var v2767 = $B.String("")
        locals_exec_show_board.res = v2767
        var no_break_2768 = true
        for(var next_2768 of $B.next_of1($B.$call(_b_.range, [13, 13, 33])(0, $B.$call(_b_.len, [22, 22, 32])(locals_exec_show_board.board)), frame, 52)){
          var v2769 = next_2768
          locals_exec_show_board.i = v2769
          if($B.set_lineno(frame, 53) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_show_board.board, locals_exec_show_board.i, [13, 19, 20]), $B.String(" ")))){
            $B.set_lineno(frame, 54)
            var v2770 = $B.rich_op('__add__', locals_exec_show_board.res, $B.String(" . "), [20, 24, 25, 31])
            locals_exec_show_board.res = v2770
          }else{
            $B.set_lineno(frame, 55)
            var v2771 = $B.rich_op('__add__', $B.rich_op('__add__', $B.rich_op('__add__', locals_exec_show_board.res, $B.String(" "), [21, 25, 26, 30]), $B.$getitem(locals_exec_show_board.board, locals_exec_show_board.i, [33, 39, 40]), [25, 31, 32, 40]), $B.String(" "), [31, 42, 43, 47])
            locals_exec_show_board.res = v2771
          }
          if($B.set_lineno(frame, 56) && $B.$bool($B.rich_comp('__eq__', $B.rich_op('__mod__', locals_exec_show_board.i, 8, [13, 15, 16, 18]), 7))){
            $B.set_lineno(frame, 56)
            var v2772 = $B.rich_op('__add__', locals_exec_show_board.res, $B.String("\n"), [32, 36, 37, 42])
            locals_exec_show_board.res = v2772
          }
        }
        $B.set_lineno(frame, 57);
        $B.$call(locals_exec.append_to_jornal, [4, 4, 25])(locals_exec_show_board.res)
        $B.set_lineno(frame, 58)
        var result = locals_exec_show_board.res
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_show_board.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    show_board2773.$is_func = true
    show_board2773.$infos = {
      __name__: "show_board", __qualname__: "show_board",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 50,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'show_board',
        co_nlocals: 3,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['board','res','i'])
      }
    }
    return show_board2773
  }
  locals_exec.show_board = show_board$2773({})
  locals_exec.show_board.$set_defaults = function(value){
    return locals_exec.show_board = show_board$2773(value)
  }
  locals_exec.show_board.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 60)
  var ind$2779 = function(defaults){
    function ind2779(){
      var locals_exec_ind,
          locals
      locals_exec_ind = locals = $B.args("ind", 1, {sq: null} , ['sq'], arguments, defaults, null, null)
      var frame = ["ind", locals, "exec", locals_exec, ind2779]
      frame.__file__ = '<string>'
      frame.$lineno = 60
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 61)
        var v2774 = $B.$list([$B.String("a"), $B.String("b"), $B.String("c"), $B.String("d"), $B.String("e"), $B.String("f"), $B.String("g"), $B.String("h")])
        locals_exec_ind.a = v2774
        var no_break_2775 = true
        for(var next_2775 of $B.next_of1($B.$call(_b_.range, [13, 13, 29])(0, $B.$call(_b_.len, [22, 22, 28])(locals_exec_ind.a)), frame, 62)){
          var v2776 = next_2775
          locals_exec_ind.i = v2776
          if($B.set_lineno(frame, 63) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_ind.sq, 0, [13, 16, 17]), $B.$getitem(locals_exec_ind.a, locals_exec_ind.i, [22, 24, 25])))){
            $B.set_lineno(frame, 63)
            var v2777 = locals_exec_ind.i
            locals_exec_ind.p1 = v2777
          }
        }
        $B.set_lineno(frame, 64)
        var v2778 = $B.rich_op('__sub__', 8, $B.$call(_b_.int, [13, 13, 23])($B.$getitem(locals_exec_ind.sq, 1, [17, 20, 21])), [9, 11, 12, 23])
        locals_exec_ind.p2 = v2778
        $B.set_lineno(frame, 65)
        var result = $B.rich_op('__add__', $B.rich_op('__mul__', locals_exec_ind.p2, 8, [11, 14, 15, 17]), $B.resolve_local('p1', [20,20,22]), [14, 18, 19, 22])
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_ind.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    ind2779.$is_func = true
    ind2779.$infos = {
      __name__: "ind", __qualname__: "ind",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 60,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'ind',
        co_nlocals: 5,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['sq','a','i','p1','p2'])
      }
    }
    return ind2779
  }
  locals_exec.ind = ind$2779({})
  locals_exec.ind.$set_defaults = function(value){
    return locals_exec.ind = ind$2779(value)
  }
  locals_exec.ind.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 67)
  var clear_sq$2786 = function(defaults){
    function clear_sq2786(){
      var locals_exec_clear_sq,
          locals
      locals_exec_clear_sq = locals = $B.args("clear_sq", 1, {sq: null} , ['sq'], arguments, defaults, null, null)
      var frame = ["clear_sq", locals, "exec", locals_exec, clear_sq2786]
      frame.__file__ = '<string>'
      frame.$lineno = 67
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 69) && $B.$bool($B.rich_comp('__eq__', locals_exec_clear_sq.sq, $B.String("g1")))){
          $B.set_lineno(frame, 69)
          var v2780 = $B.$list([$B.$call(locals_exec.ind, [32, 32, 41])($B.String("h1")), $B.$call(locals_exec.ind, [43, 43, 52])($B.String("f1"))])
          locals_exec_clear_sq.squares = v2780
        }
        if($B.set_lineno(frame, 70) && $B.$bool($B.rich_comp('__eq__', locals_exec_clear_sq.sq, $B.String("c1")))){
          $B.set_lineno(frame, 70)
          var v2781 = $B.$list([$B.$call(locals_exec.ind, [32, 32, 41])($B.String("a1")), $B.$call(locals_exec.ind, [43, 43, 52])($B.String("d1"))])
          locals_exec_clear_sq.squares = v2781
        }
        if($B.set_lineno(frame, 71) && $B.$bool($B.rich_comp('__eq__', locals_exec_clear_sq.sq, $B.String("c8")))){
          $B.set_lineno(frame, 71)
          var v2782 = $B.$list([$B.$call(locals_exec.ind, [32, 32, 41])($B.String("a8")), $B.$call(locals_exec.ind, [43, 43, 52])($B.String("d8"))])
          locals_exec_clear_sq.squares = v2782
        }
        if($B.set_lineno(frame, 72) && $B.$bool($B.rich_comp('__eq__', locals_exec_clear_sq.sq, $B.String("g8")))){
          $B.set_lineno(frame, 72)
          var v2783 = $B.$list([$B.$call(locals_exec.ind, [32, 32, 41])($B.String("h8")), $B.$call(locals_exec.ind, [43, 43, 52])($B.String("f8"))])
          locals_exec_clear_sq.squares = v2783
        }
        $B.set_lineno(frame, 73)
        var v2784 = $B.$getitem($B.resolve_global('a', _frames), $B.$getitem($B.resolve_local('squares', [22,22,29]), 0, [22, 30, 31]), [20, 22, 31])
        $B.$setitem($B.resolve_global('a', _frames), $B.$getitem($B.resolve_local('squares', [6,6,13]), 1, [6, 14, 15]), v2784)
        $B.set_lineno(frame, 74)
        var v2785 = $B.String(" ")
        $B.$setitem($B.resolve_global('a', _frames), $B.$getitem($B.resolve_local('squares', [6,6,13]), 0, [6, 14, 15]), v2785)
        $B.set_lineno(frame, 75)
        var result = 1
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_clear_sq.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    clear_sq2786.$is_func = true
    clear_sq2786.$infos = {
      __name__: "clear_sq", __qualname__: "clear_sq",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 67,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'clear_sq',
        co_nlocals: 2,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['sq','squares'])
      }
    }
    return clear_sq2786
  }
  locals_exec.clear_sq = clear_sq$2786({})
  locals_exec.clear_sq.$set_defaults = function(value){
    return locals_exec.clear_sq = clear_sq$2786(value)
  }
  locals_exec.clear_sq.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 78)
  var uncode$2803 = function(defaults){
    function uncode2803(){
      var locals_exec_uncode,
          locals
      locals_exec_uncode = locals = $B.args("uncode", 1, {uci: null} , ['uci'], arguments, defaults, null, null)
      var frame = ["uncode", locals, "exec", locals_exec, uncode2803]
      frame.__file__ = '<string>'
      frame.$lineno = 78
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 80)
        var v2787 = $B.$list([])
        locals_exec_uncode.our_move = v2787
        if($B.set_lineno(frame, 81) && $B.$bool($B.rich_comp('__lt__', $B.$call(_b_.len, [8, 8, 16])(locals_exec_uncode.uci), 4))){
          $B.set_lineno(frame, 82);
          $B.$call(_b_.print, [7, 7, 23])($B.String("<4Error"))
          $B.set_lineno(frame, 83)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 84) && $B.$bool($B.rich_comp('__eq__', $B.$call(_b_.len, [8, 8, 16])(locals_exec_uncode.uci), 5))){
          $B.set_lineno(frame, 85)
          var v2788 = $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 1, [25, 29, 30]), [16, 23, 24, 30])
          locals_exec_uncode.sq1 = v2788
          $B.set_lineno(frame, 86)
          var v2789 = $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 3, [25, 29, 30]), [16, 23, 24, 30])
          locals_exec_uncode.sq2 = v2789
          $B.set_lineno(frame, 87)
          var v2790 = $B.$getitem(locals_exec_uncode.uci, 4, [18, 22, 23])
          locals_exec_uncode.piece = v2790
          if($B.set_lineno(frame, 88) && $B.$bool($B.rich_op('__mod__', $B.resolve_in_scopes('move', [locals_exec_uncode,locals_exec,_b_], [14,14,18]), 2, [14, 19, 20, 22]))){
            $B.set_lineno(frame, 89)
            var v2791 = $B.$call($B.$getattr_pep657(locals_exec_uncode.piece, 'upper', [28, 28, 39]), [34, 34, 41])()
            $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [16, 16, 24])(locals_exec_uncode.sq2), v2791)
          }else{
            $B.set_lineno(frame, 90)
            var v2793 = $B.$call($B.$getattr_pep657(locals_exec_uncode.piece, 'lower', [30, 30, 41]), [36, 36, 43])()
            $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [18, 18, 26])(locals_exec_uncode.sq2), v2793)
          }
          $B.set_lineno(frame, 91)
          var v2794 = $B.String(" ")
          $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [12, 12, 20])(locals_exec_uncode.sq1), v2794)
          $B.set_lineno(frame, 93)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else if($B.set_lineno(frame, 94) && $B.$bool(($B.$bool(locals.$test = (! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [12, 16, 17]), $B.$getitem(locals_exec_uncode.uci, 1, [21, 25, 26]), [12, 19, 20, 26]), $B.String("e1"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [44, 48, 49]), $B.$getitem(locals_exec_uncode.uci, 3, [53, 57, 58]), [44, 51, 52, 58]), $B.String("g1"))) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [73, 77, 78]), $B.$getitem(locals_exec_uncode.uci, 3, [82, 86, 87]), [73, 80, 81, 87]), $B.String("c1"))))) ? locals.$test : (! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [110, 114, 115]), $B.$getitem(locals_exec_uncode.uci, 1, [119, 123, 124]), [110, 117, 118, 124]), $B.String("e8"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [142, 146, 147]), $B.$getitem(locals_exec_uncode.uci, 3, [151, 155, 156]), [142, 149, 150, 156]), $B.String("g8"))) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [171, 175, 176]), $B.$getitem(locals_exec_uncode.uci, 3, [180, 184, 185]), [171, 178, 179, 185]), $B.String("c8"))))))){
          $B.set_lineno(frame, 95)
          var v2795 = $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 1, [25, 29, 30]), [16, 23, 24, 30])
          locals_exec_uncode.sq1 = v2795
          $B.set_lineno(frame, 96)
          var v2796 = $B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 3, [25, 29, 30]), [16, 23, 24, 30])
          locals_exec_uncode.sq2 = v2796
          $B.set_lineno(frame, 97)
          var v2797 = $B.$getitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [26, 26, 34])(locals_exec_uncode.sq1), [24, 26, 34])
          $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [12, 12, 20])(locals_exec_uncode.sq2), v2797)
          $B.set_lineno(frame, 98)
          var v2798 = $B.String(" ")
          $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [12, 12, 20])(locals_exec_uncode.sq1), v2798)
          if($B.set_lineno(frame, 100) && $B.$bool($B.rich_comp('__eq__', $B.$call($B.$getattr_pep657($B.$getitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [16, 16, 24])(locals_exec_uncode.sq2), [14, 16, 24]), 'upper', [14, 14, 31]), [26, 26, 33])(), $B.String("K")))){
            $B.set_lineno(frame, 101);
            $B.$call(locals_exec.clear_sq, [15, 15, 28])(locals_exec_uncode.sq2)
          }
          $B.set_lineno(frame, 102)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else if($B.set_lineno(frame, 103) && $B.$bool($B.rich_comp('__eq__', $B.$call(_b_.len, [10, 10, 18])(locals_exec_uncode.uci), 4))){
          $B.set_lineno(frame, 104)
          var v2800 = $B.$getitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [38, 38, 58])($B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [42, 46, 47]), $B.$getitem(locals_exec_uncode.uci, 1, [51, 55, 56]), [42, 49, 50, 56])), [36, 38, 58])
          $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [12, 12, 32])($B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 2, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 3, [25, 29, 30]), [16, 23, 24, 30])), v2800)
          $B.set_lineno(frame, 105)
          var v2801 = $B.String(" ")
          $B.$setitem($B.resolve_global('a', _frames), $B.$call(locals_exec.ind, [12, 12, 32])($B.rich_op('__add__', $B.$getitem(locals_exec_uncode.uci, 0, [16, 20, 21]), $B.$getitem(locals_exec_uncode.uci, 1, [25, 29, 30]), [16, 23, 24, 30])), v2801)
          $B.set_lineno(frame, 107)
          var v2802 = 1
          locals_exec_uncode.lastSq = v2802
          $B.set_lineno(frame, 108)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          $B.set_lineno(frame, 109)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_uncode.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    uncode2803.$is_func = true
    uncode2803.$infos = {
      __name__: "uncode", __qualname__: "uncode",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 78,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'uncode',
        co_nlocals: 6,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['uci','our_move','sq1','sq2','piece','lastSq'])
      }
    }
    return uncode2803
  }
  locals_exec.uncode = uncode$2803({})
  locals_exec.uncode.$set_defaults = function(value){
    return locals_exec.uncode = uncode$2803(value)
  }
  locals_exec.uncode.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 111)
  var convert$2805 = function(defaults){
    function convert2805(){
      var locals_exec_convert,
          locals
      locals_exec_convert = locals = $B.args("convert", 1, {sq: null} , ['sq'], arguments, defaults, null, null)
      var frame = ["convert", locals, "exec", locals_exec, convert2805]
      frame.__file__ = '<string>'
      frame.$lineno = 111
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 112)
        var v2804 = $B.$list([$B.String("a"), $B.String("b"), $B.String("c"), $B.String("d"), $B.String("e"), $B.String("f"), $B.String("g"), $B.String("h")])
        locals_exec_convert.a = v2804
        $B.set_lineno(frame, 113)
        var result = $B.rich_op('__add__', $B.$getitem(locals_exec_convert.a, $B.rich_op('__mod__', locals_exec_convert.sq, 8, [13, 16, 17, 19]), [11, 16, 17]), $B.$call(_b_.str, [23, 23, 56])($B.$call(_b_.int, [27, 27, 55])($B.rich_op('__sub__', 8, $B.rich_op('__truediv__', $B.rich_op('__sub__', locals_exec_convert.sq, $B.rich_op('__mod__', locals_exec_convert.sq, 8, [42, 45, 46, 48]), [36, 39, 40, 46]), 8, [39, 51, 52, 54]), [31, 33, 34, 52]))), [11, 21, 22, 56])
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_convert.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    convert2805.$is_func = true
    convert2805.$infos = {
      __name__: "convert", __qualname__: "convert",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 111,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'convert',
        co_nlocals: 2,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['sq','a'])
      }
    }
    return convert2805
  }
  locals_exec.convert = convert$2805({})
  locals_exec.convert.$set_defaults = function(value){
    return locals_exec.convert = convert$2805(value)
  }
  locals_exec.convert.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 115)
  var indexOf$2808 = function(defaults){
    function indexOf2808(){
      var locals_exec_indexOf,
          locals
      locals_exec_indexOf = locals = $B.args("indexOf", 2, {piece: null, pos: null} , ['piece', 'pos'], arguments, defaults, null, null)
      var frame = ["indexOf", locals, "exec", locals_exec, indexOf2808]
      frame.__file__ = '<string>'
      frame.$lineno = 115
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        var no_break_2806 = true
        for(var next_2806 of $B.next_of1($B.$call(_b_.range, [13, 13, 31])(0, $B.$call(_b_.len, [22, 22, 30])(locals_exec_indexOf.pos)), frame, 116)){
          var v2807 = next_2806
          locals_exec_indexOf.i = v2807
          if($B.set_lineno(frame, 117) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_indexOf.pos, locals_exec_indexOf.i, [15, 19, 20]), locals_exec_indexOf.piece))){
            $B.set_lineno(frame, 117)
            var result = locals_exec_indexOf.i
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        $B.set_lineno(frame, 118)
        var result = -1
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_indexOf.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    indexOf2808.$is_func = true
    indexOf2808.$infos = {
      __name__: "indexOf", __qualname__: "indexOf",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 115,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'indexOf',
        co_nlocals: 3,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','pos','i'])
      }
    }
    return indexOf2808
  }
  locals_exec.indexOf = indexOf$2808({})
  locals_exec.indexOf.$set_defaults = function(value){
    return locals_exec.indexOf = indexOf$2808(value)
  }
  locals_exec.indexOf.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 120)
  var turn$2809 = function(defaults){
    function turn2809(){
      var locals_exec_turn,
          locals
      locals_exec_turn = locals = $B.args("turn", 2, {piece: null, move: null} , ['piece', 'move'], arguments, defaults, null, null)
      var frame = ["turn", locals, "exec", locals_exec, turn2809]
      frame.__file__ = '<string>'
      frame.$lineno = 120
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 121) && $B.$bool($B.rich_comp('__ne__', $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_turn.piece, 'upper', [11, 11, 22]), [17, 17, 24])(), locals_exec_turn.piece), locals_exec_turn.move))){
          $B.set_lineno(frame, 121)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_turn.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    turn2809.$is_func = true
    turn2809.$infos = {
      __name__: "turn", __qualname__: "turn",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 120,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'turn',
        co_nlocals: 2,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','move'])
      }
    }
    return turn2809
  }
  locals_exec.turn = turn$2809({})
  locals_exec.turn.$set_defaults = function(value){
    return locals_exec.turn = turn$2809(value)
  }
  locals_exec.turn.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 123)
  var chessmove2$2828 = function(defaults){
    function chessmove22828(){
      var locals_exec_chessmove2,
          locals
      locals_exec_chessmove2 = locals = $B.args("chessmove2", 5, {piece: null, pos: null, sq: null, b: null, a: null} , ['piece', 'pos', 'sq', 'b', 'a'], arguments, defaults, null, null)
      var frame = ["chessmove2", locals, "exec", locals_exec, chessmove22828]
      frame.__file__ = '<string>'
      frame.$lineno = 123
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 124) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove2.piece, $B.String(" ")))){
          $B.set_lineno(frame, 124)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 125)
        var v2810 = $B.rich_op('__mod__', locals_exec_chessmove2.pos, 8, [11, 15, 16, 18])
        locals_exec_chessmove2.a1 = v2810
        $B.set_lineno(frame, 126)
        var v2811 = $B.rich_op('__truediv__', $B.rich_op('__sub__', locals_exec_chessmove2.pos, $B.rich_op('__mod__', locals_exec_chessmove2.pos, 8, [19, 23, 24, 26]), [12, 16, 17, 24]), 8, [16, 29, 30, 32])
        locals_exec_chessmove2.a2 = v2811
        $B.set_lineno(frame, 127)
        var v2812 = $B.rich_op('__mod__', locals_exec_chessmove2.sq, 8, [12, 15, 16, 18])
        locals_exec_chessmove2.sq1 = v2812
        $B.set_lineno(frame, 128)
        var v2813 = $B.rich_op('__truediv__', $B.rich_op('__sub__', locals_exec_chessmove2.sq, $B.rich_op('__mod__', locals_exec_chessmove2.sq, 8, [19, 22, 23, 25]), [13, 16, 17, 23]), 8, [16, 28, 29, 31])
        locals_exec_chessmove2.sq2 = v2813
        if($B.set_lineno(frame, 129) && $B.$bool($B.rich_comp('__eq__', $B.$call(locals_exec.turn, [10, 10, 35])(locals_exec_chessmove2.piece, $B.rich_op('__mod__', $B.resolve_in_scopes('testMove', [locals_exec_chessmove2,locals_exec,_b_], [22,22,30]), 2, [22, 31, 32, 34])), 0))){
          $B.set_lineno(frame, 129)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 131) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_chessmove2.piece, $B.String("N"))) ? locals.$test : $B.rich_comp('__ne__', locals_exec_chessmove2.piece, $B.String("n"))))){
          if($B.set_lineno(frame, 132) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1)) ? locals.$test : $B.rich_comp('__eq__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2)))){
            $B.set_lineno(frame, 132)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 133) && $B.$bool((! $B.$bool(locals.$test = (! $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [16, 20, 21, 24]), 0)) ? locals.$test : $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [36, 40, 41, 44]), 0))) ? locals.$test : $B.rich_comp('__ne__', $B.$call(_b_.abs, [57, 57, 70])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [61, 65, 66, 69])), $B.$call(_b_.abs, [74, 74, 87])($B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [78, 82, 83, 86])))))){
            $B.set_lineno(frame, 133)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 134)
          var v2814 = 0
          locals_exec_chessmove2.const1 = v2814
          $B.set_lineno(frame, 135)
          var v2815 = 0
          locals_exec_chessmove2.const2 = v2815
          if($B.set_lineno(frame, 136) && $B.$bool($B.rich_comp('__gt__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1))){
            $B.set_lineno(frame, 136)
            var v2816 = 1
            locals_exec_chessmove2.const1 = v2816
          }
          if($B.set_lineno(frame, 137) && $B.$bool($B.rich_comp('__lt__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1))){
            $B.set_lineno(frame, 137)
            var v2817 = -1
            locals_exec_chessmove2.const1 = v2817
          }
          if($B.set_lineno(frame, 138) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1))){
            $B.set_lineno(frame, 138)
            var v2818 = 0
            locals_exec_chessmove2.const1 = v2818
          }
          if($B.set_lineno(frame, 139) && $B.$bool($B.rich_comp('__gt__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2))){
            $B.set_lineno(frame, 139)
            var v2819 = 1
            locals_exec_chessmove2.const2 = v2819
          }
          if($B.set_lineno(frame, 140) && $B.$bool($B.rich_comp('__lt__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2))){
            $B.set_lineno(frame, 140)
            var v2820 = -1
            locals_exec_chessmove2.const2 = v2820
          }
          if($B.set_lineno(frame, 141) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2))){
            $B.set_lineno(frame, 141)
            var v2821 = 0
            locals_exec_chessmove2.const2 = v2821
          }
          if($B.set_lineno(frame, 142) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove2.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("R"))) ? locals.$test : (! $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [43, 47, 48, 51]), 0)) ? locals.$test : $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [63, 67, 68, 71]), 0))))){
            $B.set_lineno(frame, 142)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 143) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove2.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("B"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [43, 47, 48, 51]), 0)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [62, 66, 67, 70]), 0))))){
            $B.set_lineno(frame, 143)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 144) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove2.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("K"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [43, 43, 56])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [47, 51, 52, 55])), 1)) ? locals.$test : $B.rich_comp('__gt__', $B.$call(_b_.abs, [66, 66, 79])($B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [70, 74, 75, 78])), 1))))){
            $B.set_lineno(frame, 144)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 145) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove2.piece, $B.String("P"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__ne__', $B.$call(_b_.abs, [35, 35, 48])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [39, 43, 44, 47])), 1)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [59, 63, 64, 67]), 1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_in_scopes('testMove', [locals_exec_chessmove2,locals_exec,_b_], [78,78,86]), 2, [78, 87, 88, 90]), 0))))){
            $B.set_lineno(frame, 145)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 146) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove2.piece, $B.String("p"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__ne__', $B.$call(_b_.abs, [35, 35, 48])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [39, 43, 44, 47])), 1)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [59, 63, 64, 67]), -1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_in_scopes('testMove', [locals_exec_chessmove2,locals_exec,_b_], [79,79,87]), 2, [79, 88, 89, 91]), 1))))){
            $B.set_lineno(frame, 146)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 147)
          var v2822 = $B.rich_op('__add__', locals_exec_chessmove2.a1, locals_exec_chessmove2.const1, [15, 18, 19, 26])
          locals_exec_chessmove2.a1 = v2822
          $B.set_lineno(frame, 148)
          var v2823 = $B.rich_op('__add__', locals_exec_chessmove2.a2, locals_exec_chessmove2.const2, [15, 18, 19, 26])
          locals_exec_chessmove2.a2 = v2823
          var no_break_2824 = true
          while($B.set_lineno(frame, 149) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_chessmove2.a1, locals_exec_chessmove2.sq1)) ? locals.$test : $B.rich_comp('__ne__', locals_exec_chessmove2.a2, locals_exec_chessmove2.sq2)))){
            if($B.set_lineno(frame, 150) && $B.$bool($B.rich_comp('__ne__', $B.$getitem(locals_exec_chessmove2.b, $B.$call(_b_.int, [20, 20, 36])($B.rich_op('__add__', $B.rich_op('__mul__', locals_exec_chessmove2.a2, 8, [24, 27, 28, 30]), locals_exec_chessmove2.a1, [27, 31, 32, 35])), [18, 20, 36]), $B.String(" ")))){
              $B.set_lineno(frame, 150)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
            $B.set_lineno(frame, 151)
            var v2826 = $B.rich_op('__add__', locals_exec_chessmove2.a1, locals_exec_chessmove2.const1, [19, 22, 23, 30])
            locals_exec_chessmove2.a1 = v2826
            $B.set_lineno(frame, 152)
            var v2827 = $B.rich_op('__add__', locals_exec_chessmove2.a2, locals_exec_chessmove2.const2, [19, 22, 23, 30])
            locals_exec_chessmove2.a2 = v2827
            if($B.set_lineno(frame, 153) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__lt__', locals_exec_chessmove2.a1, 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__lt__', locals_exec_chessmove2.a2, 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__gt__', locals_exec_chessmove2.a1, 7)) ? locals.$test : $B.rich_comp('__gt__', locals_exec_chessmove2.a2, 7)))){
              $B.set_lineno(frame, 153)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
          }
          $B.set_lineno(frame, 154)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          if($B.set_lineno(frame, 156) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [15, 15, 28])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [19, 23, 24, 27])), 2)) ? locals.$test : $B.rich_comp('__gt__', $B.$call(_b_.abs, [38, 38, 51])($B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [42, 46, 47, 50])), 2)))){
            $B.set_lineno(frame, 156)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 157) && $B.$bool($B.rich_comp('__eq__', $B.$call(_b_.abs, [14, 14, 27])($B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [18, 22, 23, 26])), $B.$call(_b_.abs, [31, 31, 44])($B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [35, 39, 40, 43]))))){
            $B.set_lineno(frame, 157)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 158) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove2.sq1, locals_exec_chessmove2.a1, [15, 19, 20, 23]), 0)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove2.sq2, locals_exec_chessmove2.a2, [34, 38, 39, 42]), 0)))){
            $B.set_lineno(frame, 158)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 159)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_chessmove2.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    chessmove22828.$is_func = true
    chessmove22828.$infos = {
      __name__: "chessmove2", __qualname__: "chessmove2",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 5,
        co_filename: '<string>',
        co_firstlineno: 123,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'chessmove2',
        co_nlocals: 11,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','pos','sq','b','a','a1','a2','sq1','sq2','const1','const2'])
      }
    }
    return chessmove22828
  }
  locals_exec.chessmove2 = chessmove2$2828({})
  locals_exec.chessmove2.$set_defaults = function(value){
    return locals_exec.chessmove2 = chessmove2$2828(value)
  }
  locals_exec.chessmove2.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 161)
  var check_after_move$2837 = function(defaults){
    function check_after_move2837(){
      var locals_exec_check_after_move,
          locals
      locals_exec_check_after_move = locals = $B.args("check_after_move", 3, {a: null, pos: null, sq: null} , ['a', 'pos', 'sq'], arguments, defaults, null, null)
      var frame = ["check_after_move", locals, "exec", locals_exec, check_after_move2837]
      frame.__file__ = '<string>'
      frame.$lineno = 161
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 163)
        var v2829 = $B.$call($B.$getattr_pep657(locals_exec_check_after_move.a, 'copy', [8, 8, 14]), [10, 10, 16])()
        locals_exec_check_after_move.b = v2829
        $B.set_lineno(frame, 164)
        var v2830 = $B.rich_op('__add__', $B.resolve_in_scopes('move', [locals_exec_check_after_move,locals_exec,_b_], [15,15,19]), 1, [15, 20, 21, 23])
        locals_exec.testMove = v2830
        $B.set_lineno(frame, 165)
        var v2831 = $B.$getitem(locals_exec_check_after_move.b, locals_exec_check_after_move.pos, [12, 14, 17])
        $B.$setitem(locals_exec_check_after_move.b, locals_exec_check_after_move.sq, v2831)
        $B.set_lineno(frame, 166)
        var v2832 = $B.String(" ")
        $B.$setitem(locals_exec_check_after_move.b, locals_exec_check_after_move.pos, v2832)
        if($B.set_lineno(frame, 167) && $B.$bool($B.rich_op('__mod__', $B.resolve_in_scopes('move', [locals_exec_check_after_move,locals_exec,_b_], [8,8,12]), 2, [8, 13, 14, 16]))){
          $B.set_lineno(frame, 168)
          var v2833 = $B.$call(locals_exec.indexOf, [16, 16, 31])($B.String("K"), locals_exec_check_after_move.b)
          locals_exec_check_after_move.king = v2833
        }else{
          $B.set_lineno(frame, 170)
          var v2834 = $B.$call(locals_exec.indexOf, [16, 16, 31])($B.String("k"), locals_exec_check_after_move.b)
          locals_exec_check_after_move.king = v2834
        }
        var no_break_2835 = true
        for(var next_2835 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 171)){
          var v2836 = next_2835
          locals_exec_check_after_move.i = v2836
          if($B.set_lineno(frame, 172) && $B.$bool($B.$call(locals_exec.chessmove2, [10, 10, 41])($B.$getitem(locals_exec_check_after_move.b, locals_exec_check_after_move.i, [21, 23, 24]), locals_exec_check_after_move.i, locals_exec_check_after_move.king, locals_exec_check_after_move.b, locals_exec_check_after_move.a))){
            $B.set_lineno(frame, 172)
            var result = 1
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        $B.set_lineno(frame, 173)
        var result = 0
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_check_after_move.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    check_after_move2837.$is_func = true
    check_after_move2837.$infos = {
      __name__: "check_after_move", __qualname__: "check_after_move",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 3,
        co_filename: '<string>',
        co_firstlineno: 161,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'check_after_move',
        co_nlocals: 7,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['a','pos','sq','testMove','b','king','i'])
      }
    }
    return check_after_move2837
  }
  locals_exec.check_after_move = check_after_move$2837({})
  locals_exec.check_after_move.$set_defaults = function(value){
    return locals_exec.check_after_move = check_after_move$2837(value)
  }
  locals_exec.check_after_move.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 175)
  var chessmove$2852 = function(defaults){
    function chessmove2852(){
      var locals_exec_chessmove,
          locals
      locals_exec_chessmove = locals = $B.args("chessmove", 4, {piece: null, pos: null, sq: null, a: null} , ['piece', 'pos', 'sq', 'a'], arguments, defaults, null, null)
      var frame = ["chessmove", locals, "exec", locals_exec, chessmove2852]
      frame.__file__ = '<string>'
      frame.$lineno = 175
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 177) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove.piece, $B.String(" ")))){
          $B.set_lineno(frame, 177)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 178)
        var v2838 = $B.rich_op('__mod__', locals_exec_chessmove.pos, 8, [11, 15, 16, 18])
        locals_exec_chessmove.a1 = v2838
        $B.set_lineno(frame, 179)
        var v2839 = $B.rich_op('__truediv__', $B.rich_op('__sub__', locals_exec_chessmove.pos, $B.rich_op('__mod__', locals_exec_chessmove.pos, 8, [19, 23, 24, 26]), [12, 16, 17, 24]), 8, [16, 29, 30, 32])
        locals_exec_chessmove.a2 = v2839
        $B.set_lineno(frame, 180)
        var v2840 = $B.rich_op('__mod__', locals_exec_chessmove.sq, 8, [12, 15, 16, 18])
        locals_exec_chessmove.sq1 = v2840
        $B.set_lineno(frame, 181)
        var v2841 = $B.rich_op('__truediv__', $B.rich_op('__sub__', locals_exec_chessmove.sq, $B.rich_op('__mod__', locals_exec_chessmove.sq, 8, [19, 22, 23, 25]), [13, 16, 17, 23]), 8, [16, 28, 29, 31])
        locals_exec_chessmove.sq2 = v2841
        if($B.set_lineno(frame, 182) && $B.$bool($B.rich_comp('__ne__', $B.$getitem(locals_exec_chessmove.a, locals_exec_chessmove.sq, [10, 12, 14]), $B.String(" ")))){
          if($B.set_lineno(frame, 183) && $B.$bool($B.rich_comp('__eq__', $B.$call(locals_exec.turn, [15, 15, 40])($B.$getitem(locals_exec_chessmove.a, locals_exec_chessmove.sq, [20, 22, 24]), $B.rich_op('__mod__', $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [28, 32, 33, 34]), 2, [32, 36, 37, 39])), 0))){
            $B.set_lineno(frame, 183)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        if($B.set_lineno(frame, 184) && $B.$bool($B.rich_comp('__eq__', $B.$call(locals_exec.turn, [10, 10, 31])(locals_exec_chessmove.piece, $B.rich_op('__mod__', $B.resolve_global('move', _frames), 2, [22, 27, 28, 30])), 0))){
          $B.set_lineno(frame, 184)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 185) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_chessmove.piece, $B.String("N"))) ? locals.$test : $B.rich_comp('__ne__', locals_exec_chessmove.piece, $B.String("n"))))){
          if($B.set_lineno(frame, 186) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1)) ? locals.$test : $B.rich_comp('__eq__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2)))){
            $B.set_lineno(frame, 186)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 187) && $B.$bool((! $B.$bool(locals.$test = (! $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [16, 20, 21, 24]), 0)) ? locals.$test : $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [36, 40, 41, 44]), 0))) ? locals.$test : $B.rich_comp('__ne__', $B.$call(_b_.abs, [57, 57, 70])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [61, 65, 66, 69])), $B.$call(_b_.abs, [74, 74, 87])($B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [78, 82, 83, 86])))))){
            $B.set_lineno(frame, 187)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 188)
          var v2842 = 0
          locals_exec_chessmove.const1 = v2842
          $B.set_lineno(frame, 189)
          var v2843 = 0
          locals_exec_chessmove.const2 = v2843
          if($B.set_lineno(frame, 190) && $B.$bool($B.rich_comp('__gt__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1))){
            $B.set_lineno(frame, 190)
            var v2844 = 1
            locals_exec_chessmove.const1 = v2844
          }
          if($B.set_lineno(frame, 191) && $B.$bool($B.rich_comp('__lt__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1))){
            $B.set_lineno(frame, 191)
            var v2845 = -1
            locals_exec_chessmove.const1 = v2845
          }
          if($B.set_lineno(frame, 192) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1))){
            $B.set_lineno(frame, 192)
            var v2846 = 0
            locals_exec_chessmove.const1 = v2846
          }
          if($B.set_lineno(frame, 193) && $B.$bool($B.rich_comp('__gt__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2))){
            $B.set_lineno(frame, 193)
            var v2847 = 1
            locals_exec_chessmove.const2 = v2847
          }
          if($B.set_lineno(frame, 194) && $B.$bool($B.rich_comp('__lt__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2))){
            $B.set_lineno(frame, 194)
            var v2848 = -1
            locals_exec_chessmove.const2 = v2848
          }
          if($B.set_lineno(frame, 195) && $B.$bool($B.rich_comp('__eq__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2))){
            $B.set_lineno(frame, 195)
            var v2849 = 0
            locals_exec_chessmove.const2 = v2849
          }
          if($B.set_lineno(frame, 196) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("R"))) ? locals.$test : (! $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [43, 47, 48, 51]), 0)) ? locals.$test : $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [63, 67, 68, 71]), 0))))){
            $B.set_lineno(frame, 196)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 197) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("B"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [43, 47, 48, 51]), 0)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [62, 66, 67, 70]), 0))))){
            $B.set_lineno(frame, 197)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 198) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove.piece, 'upper', [15, 15, 26]), [21, 21, 28])(), $B.String("K"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [43, 43, 56])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [47, 51, 52, 55])), 1)) ? locals.$test : $B.rich_comp('__gt__', $B.$call(_b_.abs, [66, 66, 79])($B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [70, 74, 75, 78])), 1))))){
            $B.set_lineno(frame, 198)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 199) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', $B.$getitem(locals_exec_chessmove.a, locals_exec_chessmove.sq, [15, 17, 19]), $B.String(" "))) ? locals.$test : $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove.piece, 'upper', [34, 34, 45]), [40, 40, 47])(), $B.String("P"))))){
            if($B.set_lineno(frame, 202) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove.piece, $B.String("P"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [39, 39, 52])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [43, 47, 48, 51])), 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [62, 66, 67, 70]), 1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_global('move', _frames), 2, [81, 86, 87, 89]), 0))))){
              $B.set_lineno(frame, 202)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
            if($B.set_lineno(frame, 203) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove.piece, $B.String("p"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [39, 39, 52])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [43, 47, 48, 51])), 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [62, 66, 67, 70]), -1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_global('move', _frames), 2, [82, 87, 88, 90]), 1))))){
              $B.set_lineno(frame, 203)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
          }
          if($B.set_lineno(frame, 204) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.$getitem(locals_exec_chessmove.a, locals_exec_chessmove.sq, [15, 17, 19]), $B.String(" "))) ? locals.$test : $B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_chessmove.piece, 'upper', [34, 34, 45]), [40, 40, 47])(), $B.String("P"))))){
            if($B.set_lineno(frame, 205) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove.piece, $B.String("P"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__ne__', $B.$call(_b_.abs, [38, 38, 51])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [42, 46, 47, 50])), 1)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [62, 66, 67, 70]), 1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_global('move', _frames), 2, [81, 86, 87, 89]), 0))))){
              $B.set_lineno(frame, 205)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
            if($B.set_lineno(frame, 206) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_chessmove.piece, $B.String("p"))) ? locals.$test : ($B.$bool(locals.$test = $B.rich_comp('__ne__', $B.$call(_b_.abs, [38, 38, 51])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [42, 46, 47, 50])), 1)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__ne__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [62, 66, 67, 70]), -1)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__mod__', $B.resolve_global('move', _frames), 2, [82, 87, 88, 90]), 1))))){
              $B.set_lineno(frame, 206)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
          }
          var no_break_2851 = true
          while($B.set_lineno(frame, 207) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_chessmove.a1, locals_exec_chessmove.sq1)) ? locals.$test : $B.rich_comp('__ne__', locals_exec_chessmove.a2, locals_exec_chessmove.sq2)))){
            $B.set_lineno(frame, 208)
            locals_exec_chessmove.a1 = typeof locals_exec_chessmove.a1 == "number" && $B.is_safe_int(locals.$result = locals_exec_chessmove.a1 + locals_exec_chessmove.const1) ?
            locals.$result : $B.augm_assign(locals_exec_chessmove.a1, '+=', locals_exec_chessmove.const1)
            $B.set_lineno(frame, 209)
            locals_exec_chessmove.a2 = typeof locals_exec_chessmove.a2 == "number" && $B.is_safe_int(locals.$result = locals_exec_chessmove.a2 + locals_exec_chessmove.const2) ?
            locals.$result : $B.augm_assign(locals_exec_chessmove.a2, '+=', locals_exec_chessmove.const2)
            if($B.set_lineno(frame, 210) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__lt__', locals_exec_chessmove.a1, 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__lt__', locals_exec_chessmove.a2, 0)) ? locals.$test : $B.$bool(locals.$test = $B.rich_comp('__gt__', locals_exec_chessmove.a1, 7)) ? locals.$test : $B.rich_comp('__gt__', locals_exec_chessmove.a2, 7)))){
              $B.set_lineno(frame, 210)
              var result = 0
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
            if($B.set_lineno(frame, 211) && $B.$bool($B.rich_comp('__ne__', $B.$getitem(locals_exec_chessmove.a, $B.$call(_b_.int, [20, 20, 36])($B.rich_op('__add__', $B.rich_op('__mul__', locals_exec_chessmove.a2, 8, [24, 27, 28, 30]), locals_exec_chessmove.a1, [27, 31, 32, 35])), [18, 20, 36]), $B.String(" ")))){
              if($B.set_lineno(frame, 212) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_chessmove.a1, locals_exec_chessmove.sq1)) ? locals.$test : $B.rich_comp('__ne__', locals_exec_chessmove.a2, locals_exec_chessmove.sq2)))){
                $B.set_lineno(frame, 213)
                var result = 0
                if(locals.$f_trace !== _b_.None){
                  $B.trace_return(result)
                }
                $B.leave_frame()
                return result
              }
            }
          }
          if($B.set_lineno(frame, 214) && $B.$bool($B.$call(locals_exec.check_after_move, [14, 14, 42])(locals_exec_chessmove.a, locals_exec_chessmove.pos, locals_exec_chessmove.sq))){
            $B.set_lineno(frame, 214)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 215)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          if($B.set_lineno(frame, 217) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__gt__', $B.$call(_b_.abs, [15, 15, 28])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [19, 23, 24, 27])), 2)) ? locals.$test : $B.rich_comp('__gt__', $B.$call(_b_.abs, [38, 38, 51])($B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [42, 46, 47, 50])), 2)))){
            $B.set_lineno(frame, 217)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 218) && $B.$bool($B.rich_comp('__eq__', $B.$call(_b_.abs, [14, 14, 27])($B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [18, 22, 23, 26])), $B.$call(_b_.abs, [31, 31, 44])($B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [35, 39, 40, 43]))))){
            $B.set_lineno(frame, 218)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 219) && $B.$bool(($B.$bool(locals.$test = $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove.sq1, locals_exec_chessmove.a1, [15, 19, 20, 23]), 0)) ? locals.$test : $B.rich_comp('__eq__', $B.rich_op('__sub__', locals_exec_chessmove.sq2, locals_exec_chessmove.a2, [34, 38, 39, 42]), 0)))){
            $B.set_lineno(frame, 219)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          if($B.set_lineno(frame, 220) && $B.$bool($B.$call(locals_exec.check_after_move, [14, 14, 42])(locals_exec_chessmove.a, locals_exec_chessmove.pos, locals_exec_chessmove.sq))){
            $B.set_lineno(frame, 220)
            var result = 0
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 221)
          var result = 1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_chessmove.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    chessmove2852.$is_func = true
    chessmove2852.$infos = {
      __name__: "chessmove", __qualname__: "chessmove",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 4,
        co_filename: '<string>',
        co_firstlineno: 175,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'chessmove',
        co_nlocals: 10,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','pos','sq','a','a1','a2','sq1','sq2','const1','const2'])
      }
    }
    return chessmove2852
  }
  locals_exec.chessmove = chessmove$2852({})
  locals_exec.chessmove.$set_defaults = function(value){
    return locals_exec.chessmove = chessmove$2852(value)
  }
  locals_exec.chessmove.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 223)
  var trans$2857 = function(defaults){
    function trans2857(){
      var locals_exec_trans,
          locals
      locals_exec_trans = locals = $B.args("trans", 1, {piece: null} , ['piece'], arguments, defaults, null, null)
      var frame = ["trans", locals, "exec", locals_exec, trans2857]
      frame.__file__ = '<string>'
      frame.$lineno = 223
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 224)
        var v2853 = $B.String("QqRrPpBbNnKk ")
        locals_exec_trans.string1 = v2853
        $B.set_lineno(frame, 225)
        var v2854 = $B.String("qQrRpPbBnNkK ")
        locals_exec_trans.string2 = v2854
        var no_break_2855 = true
        for(var next_2855 of $B.next_of1($B.$call(_b_.range, [17, 17, 29])(0, 12), frame, 226)){
          var v2856 = next_2855
          locals_exec_trans.i = v2856
          if($B.set_lineno(frame, 227) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_trans.string1, locals_exec_trans.i, [18, 26, 27]), locals_exec_trans.piece))){
            $B.set_lineno(frame, 227)
            var result = $B.$getitem(locals_exec_trans.string2, locals_exec_trans.i, [47, 55, 56])
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        $B.set_lineno(frame, 228)
        var result = $B.String(' ')
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_trans.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    trans2857.$is_func = true
    trans2857.$infos = {
      __name__: "trans", __qualname__: "trans",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 223,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'trans',
        co_nlocals: 4,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece','string1','string2','i'])
      }
    }
    return trans2857
  }
  locals_exec.trans = trans$2857({})
  locals_exec.trans.$set_defaults = function(value){
    return locals_exec.trans = trans$2857(value)
  }
  locals_exec.trans.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 230)
  var variants_of_move$2864 = function(defaults){
    function variants_of_move2864(){
      var locals_exec_variants_of_move,
          locals
      locals_exec_variants_of_move = locals = $B.args("variants_of_move", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["variants_of_move", locals, "exec", locals_exec, variants_of_move2864]
      frame.__file__ = '<string>'
      frame.$lineno = 230
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 231)
        var v2858 = 0
        locals_exec_variants_of_move.n = v2858
        var no_break_2859 = true
        for(var next_2859 of $B.next_of1($B.$call(_b_.range, [15, 15, 27])(0, 64), frame, 232)){
          var v2860 = next_2859
          locals_exec_variants_of_move.s1 = v2860
          if($B.set_lineno(frame, 233) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_variants_of_move.pos, locals_exec_variants_of_move.s1, [13, 17, 19]), $B.String(" ")))){
            continue
          }
          var no_break_2861 = true
          for(var next_2861 of $B.next_of1($B.$call(_b_.range, [19, 19, 31])(0, 64), frame, 234)){
            var v2862 = next_2861
            locals_exec_variants_of_move.s2 = v2862
            if($B.set_lineno(frame, 235) && $B.$bool($B.$call(locals_exec.chessmove, [20, 20, 51])($B.$getitem(locals_exec_variants_of_move.pos, locals_exec_variants_of_move.s1, [30, 34, 36]), locals_exec_variants_of_move.s1, locals_exec_variants_of_move.s2, locals_exec_variants_of_move.pos))){
              $B.set_lineno(frame, 235)
              var result = 1
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
          }
        }
        $B.set_lineno(frame, 236)
        var result = 0
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_variants_of_move.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    variants_of_move2864.$is_func = true
    variants_of_move2864.$infos = {
      __name__: "variants_of_move", __qualname__: "variants_of_move",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 230,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'variants_of_move',
        co_nlocals: 4,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','n','s1','s2'])
      }
    }
    return variants_of_move2864
  }
  locals_exec.variants_of_move = variants_of_move$2864({})
  locals_exec.variants_of_move.$set_defaults = function(value){
    return locals_exec.variants_of_move = variants_of_move$2864(value)
  }
  locals_exec.variants_of_move.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 238)
  var is_our$2865 = function(defaults){
    function is_our2865(){
      var locals_exec_is_our,
          locals
      locals_exec_is_our = locals = $B.args("is_our", 1, {piece: null} , ['piece'], arguments, defaults, null, null)
      var frame = ["is_our", locals, "exec", locals_exec, is_our2865]
      frame.__file__ = '<string>'
      frame.$lineno = 238
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 239) && $B.$bool($B.rich_comp('__eq__', locals_exec_is_our.piece, $B.String(' ')))){
          $B.set_lineno(frame, 239)
          var result = 0
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 240) && $B.$bool($B.rich_comp('__eq__', $B.$call($B.$getattr_pep657(locals_exec_is_our.piece, 'upper', [8, 8, 19]), [14, 14, 21])(), locals_exec_is_our.piece))){
          $B.set_lineno(frame, 241)
          var result = $B.resolve_in_scopes('our_color', [locals_exec_is_our,locals_exec,_b_], [16,16,25])
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }else{
          $B.set_lineno(frame, 242)
          var result = $B.rich_op('__mod__', $B.rich_op('__add__', $B.resolve_in_scopes('our_color', [locals_exec_is_our,locals_exec,_b_], [18,18,27]), 1, [18, 28, 29, 31]), 2, [28, 33, 34, 36])
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_is_our.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    is_our2865.$is_func = true
    is_our2865.$infos = {
      __name__: "is_our", __qualname__: "is_our",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 238,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'is_our',
        co_nlocals: 1,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['piece'])
      }
    }
    return is_our2865
  }
  locals_exec.is_our = is_our$2865({})
  locals_exec.is_our.$set_defaults = function(value){
    return locals_exec.is_our = is_our$2865(value)
  }
  locals_exec.is_our.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 244)
  var endgame$2871 = function(defaults){
    function endgame2871(){
      var locals_exec_endgame,
          locals
      locals_exec_endgame = locals = $B.args("endgame", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["endgame", locals, "exec", locals_exec, endgame2871]
      frame.__file__ = '<string>'
      frame.$lineno = 244
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 245)
        var v2866 = 0
        locals_exec_endgame.opponent_cost = v2866
        var no_break_2867 = true
        for(var next_2867 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 246)){
          var v2868 = next_2867
          locals_exec_endgame.i = v2868
          if($B.set_lineno(frame, 247) && $B.$bool(! $B.$bool($B.$call(locals_exec.is_our, [16, 16, 30])($B.$getitem(locals_exec_endgame.pos, locals_exec_endgame.i, [23, 27, 28]))))){
            $B.set_lineno(frame, 249)
            var v2870 = $B.rich_op('__add__', locals_exec_endgame.opponent_cost, $B.$call(locals_exec.cost, [45, 45, 67])($B.$call(locals_exec.is_upper, [50, 50, 66])($B.$getitem(locals_exec_endgame.pos, locals_exec_endgame.i, [59, 63, 64]))), [29, 43, 44, 67])
            locals_exec_endgame.opponent_cost = v2870
          }
        }
        $B.set_lineno(frame, 250)
        var result = $B.rich_comp('__lt__', locals_exec_endgame.opponent_cost, 15)
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_endgame.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    endgame2871.$is_func = true
    endgame2871.$infos = {
      __name__: "endgame", __qualname__: "endgame",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 244,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'endgame',
        co_nlocals: 3,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','opponent_cost','i'])
      }
    }
    return endgame2871
  }
  locals_exec.endgame = endgame$2871({})
  locals_exec.endgame.$set_defaults = function(value){
    return locals_exec.endgame = endgame$2871(value)
  }
  locals_exec.endgame.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 252)
  var our_king$2875 = function(defaults){
    function our_king2875(){
      var locals_exec_our_king,
          locals
      locals_exec_our_king = locals = $B.args("our_king", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["our_king", locals, "exec", locals_exec, our_king2875]
      frame.__file__ = '<string>'
      frame.$lineno = 252
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        var no_break_2872 = true
        for(var next_2872 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 253)){
          var v2873 = next_2872
          locals_exec_our_king.i = v2873
          if($B.set_lineno(frame, 254) && $B.$bool($B.rich_comp('__eq__', $B.$call($B.$getattr_pep657($B.$getitem(locals_exec_our_king.pos, locals_exec_our_king.i, [13, 17, 18]), 'upper', [13, 13, 25]), [20, 20, 27])(), $B.String("K")))){
            if($B.set_lineno(frame, 255) && $B.$bool($B.$call(locals_exec.is_our, [17, 17, 31])($B.$getitem(locals_exec_our_king.pos, locals_exec_our_king.i, [24, 28, 29])))){
              $B.set_lineno(frame, 255)
              var result = locals_exec_our_king.i
              if(locals.$f_trace !== _b_.None){
                $B.trace_return(result)
              }
              $B.leave_frame()
              return result
            }
          }
        }
        var result = _b_.None
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(_b_.None)
        }
        $B.leave_frame();return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_our_king.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    our_king2875.$is_func = true
    our_king2875.$infos = {
      __name__: "our_king", __qualname__: "our_king",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 252,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'our_king',
        co_nlocals: 2,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','i'])
      }
    }
    return our_king2875
  }
  locals_exec.our_king = our_king$2875({})
  locals_exec.our_king.$set_defaults = function(value){
    return locals_exec.our_king = our_king$2875(value)
  }
  locals_exec.our_king.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 257)
  var protect_attack$2886 = function(defaults){
    function protect_attack2886(){
      var locals_exec_protect_attack,
          locals
      locals_exec_protect_attack = locals = $B.args("protect_attack", 3, {pos: null, sq: null, sq2: null} , ['pos', 'sq', 'sq2'], arguments, defaults, null, null)
      var frame = ["protect_attack", locals, "exec", locals_exec, protect_attack2886]
      frame.__file__ = '<string>'
      frame.$lineno = 257
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 259)
        var v2876 = 0
        locals_exec_protect_attack.protect_cost = v2876
        $B.set_lineno(frame, 260)
        var v2877 = 0
        locals_exec_protect_attack.attack_cost = v2877
        var no_break_2878 = true
        for(var next_2878 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 261)){
          var v2879 = next_2878
          locals_exec_protect_attack.i = v2879
          if($B.set_lineno(frame, 262) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_protect_attack.pos, locals_exec_protect_attack.i, [14, 18, 19]), $B.String(" ")))){
            continue
          }
          if($B.set_lineno(frame, 263) && $B.$bool($B.$call(locals_exec.chessmove, [15, 15, 44])($B.$getitem(locals_exec_protect_attack.pos, locals_exec_protect_attack.i, [25, 29, 30]), locals_exec_protect_attack.i, locals_exec_protect_attack.sq, locals_exec_protect_attack.pos))){
            $B.set_lineno(frame, 265)
            var v2880 = $B.rich_op('__add__', locals_exec_protect_attack.attack_cost, 1, [28, 40, 41, 43])
            locals_exec_protect_attack.attack_cost = v2880
          }else{
            $B.set_lineno(frame, 267)
            var v2881 = $B.$call($B.$getattr_pep657(locals_exec_protect_attack.pos, 'copy', [21, 21, 29]), [25, 25, 31])()
            locals_exec_protect_attack.pos2 = v2881
            $B.set_lineno(frame, 268)
            var v2882 = $B.$call(locals_exec.trans, [25, 25, 39])($B.$getitem(locals_exec_protect_attack.pos, locals_exec_protect_attack.sq, [31, 35, 37]))
            $B.$setitem(locals_exec_protect_attack.pos2, locals_exec_protect_attack.sq, v2882)
            $B.set_lineno(frame, 269)
            var v2883 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [21, 26, 27, 29])
            locals_exec.move = v2883
            if($B.set_lineno(frame, 270) && $B.$bool($B.$call(locals_exec.chessmove2, [19, 19, 56])($B.$getitem(locals_exec_protect_attack.pos2, locals_exec_protect_attack.i, [30, 35, 36]), locals_exec_protect_attack.i, locals_exec_protect_attack.sq, locals_exec_protect_attack.pos2, locals_exec_protect_attack.pos))){
              $B.set_lineno(frame, 272)
              var v2884 = $B.rich_op('__add__', locals_exec_protect_attack.protect_cost, 1, [35, 48, 49, 51])
              locals_exec_protect_attack.protect_cost = v2884
            }
            $B.set_lineno(frame, 273)
            var v2885 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [21, 26, 27, 29])
            locals_exec.move = v2885
          }
        }
        $B.set_lineno(frame, 275)
        var result = $B.rich_op('__sub__', locals_exec_protect_attack.protect_cost, locals_exec_protect_attack.attack_cost, [11, 24, 25, 37])
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_protect_attack.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    protect_attack2886.$is_func = true
    protect_attack2886.$infos = {
      __name__: "protect_attack", __qualname__: "protect_attack",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 3,
        co_filename: '<string>',
        co_firstlineno: 257,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'protect_attack',
        co_nlocals: 8,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','sq','sq2','move','protect_cost','attack_cost','i','pos2'])
      }
    }
    return protect_attack2886
  }
  locals_exec.protect_attack = protect_attack$2886({})
  locals_exec.protect_attack.$set_defaults = function(value){
    return locals_exec.protect_attack = protect_attack$2886(value)
  }
  locals_exec.protect_attack.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 277)
  var two_variants_of_move$2896 = function(defaults){
    function two_variants_of_move2896(){
      var locals_exec_two_variants_of_move,
          locals
      locals_exec_two_variants_of_move = locals = $B.args("two_variants_of_move", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["two_variants_of_move", locals, "exec", locals_exec, two_variants_of_move2896]
      frame.__file__ = '<string>'
      frame.$lineno = 277
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 278)
        var v2887 = 0
        locals_exec_two_variants_of_move.variants = v2887
        $B.set_lineno(frame, 279)
        var v2888 = $B.String('')
        locals_exec_two_variants_of_move.what_About_move = v2888
        var no_break_2889 = true
        for(var next_2889 of $B.next_of1($B.$call(_b_.range, [14, 14, 26])(0, 64), frame, 280)){
          var v2890 = next_2889
          locals_exec_two_variants_of_move.i1 = v2890
          if($B.set_lineno(frame, 281) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_two_variants_of_move.pos, locals_exec_two_variants_of_move.i1, [11, 15, 17]), $B.String(' ')))){
            continue
          }
          var no_break_2891 = true
          for(var next_2891 of $B.next_of1($B.$call(_b_.range, [18, 18, 30])(0, 64), frame, 282)){
            var v2892 = next_2891
            locals_exec_two_variants_of_move.i2 = v2892
            if($B.set_lineno(frame, 283) && $B.$bool($B.$call(locals_exec.chessmove, [16, 16, 47])($B.$getitem(locals_exec_two_variants_of_move.pos, locals_exec_two_variants_of_move.i1, [26, 30, 32]), locals_exec_two_variants_of_move.i1, locals_exec_two_variants_of_move.i2, locals_exec_two_variants_of_move.pos))){
              $B.set_lineno(frame, 284)
              var v2894 = $B.rich_op('__add__', locals_exec_two_variants_of_move.variants, 1, [29, 38, 39, 41])
              locals_exec_two_variants_of_move.variants = v2894
              if($B.set_lineno(frame, 285) && $B.$bool($B.rich_comp('__eq__', locals_exec_two_variants_of_move.variants, 1))){
                $B.set_lineno(frame, 285)
                var v2895 = $B.$list([locals_exec_two_variants_of_move.i1, locals_exec_two_variants_of_move.i2])
                locals_exec_two_variants_of_move.what_About_move = v2895
              }
              if($B.set_lineno(frame, 286) && $B.$bool($B.rich_comp('__eq__', locals_exec_two_variants_of_move.variants, 2))){
                $B.set_lineno(frame, 286)
                var result = locals_exec_two_variants_of_move.variants
                if(locals.$f_trace !== _b_.None){
                  $B.trace_return(result)
                }
                $B.leave_frame()
                return result
              }
            }
          }
        }
        if($B.set_lineno(frame, 287) && $B.$bool(locals_exec_two_variants_of_move.what_About_move)){
          $B.set_lineno(frame, 287)
          var result = locals_exec_two_variants_of_move.what_About_move
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 288)
        var result = locals_exec_two_variants_of_move.variants
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_two_variants_of_move.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    two_variants_of_move2896.$is_func = true
    two_variants_of_move2896.$infos = {
      __name__: "two_variants_of_move", __qualname__: "two_variants_of_move",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 277,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'two_variants_of_move',
        co_nlocals: 5,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','variants','what_About_move','i1','i2'])
      }
    }
    return two_variants_of_move2896
  }
  locals_exec.two_variants_of_move = two_variants_of_move$2896({})
  locals_exec.two_variants_of_move.$set_defaults = function(value){
    return locals_exec.two_variants_of_move = two_variants_of_move$2896(value)
  }
  locals_exec.two_variants_of_move.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 290)
  var one_line_eval$2919 = function(defaults){
    function one_line_eval2919(){
      var locals_exec_one_line_eval,
          locals
      locals_exec_one_line_eval = locals = $B.args("one_line_eval", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["one_line_eval", locals, "exec", locals_exec, one_line_eval2919]
      frame.__file__ = '<string>'
      frame.$lineno = 290
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 293)
        var v2897 = $B.rich_op('__add__', $B.resolve_global('calls', _frames), 1, [12, 18, 19, 21])
        locals_exec.calls = v2897
        if($B.set_lineno(frame, 295) && $B.$bool($B.rich_comp('__gt__', locals_exec.calls, 3))){
          $B.set_lineno(frame, 296)
          var v2898 = $B.rich_op('__sub__', $B.resolve_global('calls', _frames), 1, [16, 22, 23, 25])
          locals_exec.calls = v2898
          $B.set_lineno(frame, 297)
          var result = $B.String('')
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var no_break_2899 = true
        for(var next_2899 of $B.next_of1($B.$call(_b_.range, [14, 14, 26])(0, 64), frame, 298)){
          var v2900 = next_2899
          locals_exec_one_line_eval.i1 = v2900
          var no_break_2901 = true
          for(var next_2901 of $B.next_of1($B.$call(_b_.range, [18, 18, 30])(0, 64), frame, 299)){
            var v2902 = next_2901
            locals_exec_one_line_eval.i2 = v2902
            if($B.set_lineno(frame, 300) && $B.$bool($B.$call(locals_exec.chessmove, [17, 17, 48])($B.$getitem(locals_exec_one_line_eval.pos, locals_exec_one_line_eval.i1, [27, 31, 33]), locals_exec_one_line_eval.i1, locals_exec_one_line_eval.i2, locals_exec_one_line_eval.pos))){
              $B.set_lineno(frame, 301)
              var v2904 = $B.$call($B.$getattr_pep657(locals_exec_one_line_eval.pos, 'copy', [28, 28, 36]), [32, 32, 38])()
              locals_exec_one_line_eval.pos2 = v2904
              $B.set_lineno(frame, 302)
              var v2905 = $B.$getitem(locals_exec_one_line_eval.pos2, locals_exec_one_line_eval.i1, [32, 37, 39])
              $B.$setitem(locals_exec_one_line_eval.pos2, locals_exec_one_line_eval.i2, v2905)
              $B.set_lineno(frame, 303)
              var v2906 = $B.String(' ')
              $B.$setitem(locals_exec_one_line_eval.pos2, locals_exec_one_line_eval.i1, v2906)
              $B.set_lineno(frame, 304)
              var v2908 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [28, 33, 34, 36])
              locals_exec.move = v2908
              $B.set_lineno(frame, 305)
              var v2909 = $B.$call(locals_exec.two_variants_of_move, [25, 25, 51])(locals_exec_one_line_eval.pos2)
              locals_exec_one_line_eval.v = v2909
              if($B.set_lineno(frame, 306) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_one_line_eval.v, 0)) ? locals.$test : $B.$call(locals_exec.check_after_move, [39, 39, 67])(locals_exec_one_line_eval.pos2, 0, 0)))){
                $B.set_lineno(frame, 307)
                var v2911 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [34, 39, 40, 42])
                locals_exec.move = v2911
                $B.set_lineno(frame, 308)
                var v2912 = $B.rich_op('__sub__', $B.resolve_global('calls', _frames), 1, [35, 41, 42, 44])
                locals_exec.calls = v2912
                $B.set_lineno(frame, 311);
                $B.$call($B.$getattr_pep657($B.resolve_global('rightMovesArray', _frames), 'append', [27, 27, 49]), [43, 43, 100])($B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [50, 50, 61])(locals_exec_one_line_eval.i1), $B.$call(locals_exec.convert, [64, 64, 75])(locals_exec_one_line_eval.i2), [50, 62, 63, 75]), $B.$call(locals_exec.add_something, [78, 78, 99])(locals_exec_one_line_eval.i1, locals_exec_one_line_eval.i2), [62, 76, 77, 99]))
                $B.set_lineno(frame, 312)
                var result = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [34, 34, 45])(locals_exec_one_line_eval.i1), $B.$call(locals_exec.convert, [48, 48, 59])(locals_exec_one_line_eval.i2), [34, 46, 47, 59]), $B.$call(locals_exec.add_something, [62, 62, 83])(locals_exec_one_line_eval.i1, locals_exec_one_line_eval.i2), [46, 60, 61, 83])
                if(locals.$f_trace !== _b_.None){
                  $B.trace_return(result)
                }
                $B.leave_frame()
                return result
              }
              $B.set_lineno(frame, 313)
              var v2913 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [28, 33, 34, 36])
              locals_exec.move = v2913
              if($B.set_lineno(frame, 314) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__ne__', locals_exec_one_line_eval.v, 2)) ? locals.$test : $B.rich_comp('__ne__', locals_exec_one_line_eval.v, 0)))){
                $B.set_lineno(frame, 315)
                var v2914 = $B.$getitem(locals_exec_one_line_eval.pos2, $B.$getitem(locals_exec_one_line_eval.v, 0, [46, 48, 49]), [40, 46, 49])
                $B.$setitem(locals_exec_one_line_eval.pos2, $B.$getitem(locals_exec_one_line_eval.v, 1, [31, 33, 34]), v2914)
                $B.set_lineno(frame, 316)
                var v2915 = $B.String(' ')
                $B.$setitem(locals_exec_one_line_eval.pos2, $B.$getitem(locals_exec_one_line_eval.v, 0, [31, 33, 34]), v2915)
                if($B.set_lineno(frame, 317) && $B.$bool($B.$call($B.resolve_in_scopes('one_line_eval', [locals_exec_one_line_eval,locals_exec,_b_], [30,30,43]), [30, 30, 49])(locals_exec_one_line_eval.pos2))){
                  $B.set_lineno(frame, 318)
                  var v2917 = $B.rich_op('__sub__', $B.resolve_global('calls', _frames), 1, [39, 45, 46, 48])
                  locals_exec.calls = v2917
                  $B.set_lineno(frame, 319);
                  $B.$call($B.$getattr_pep657($B.resolve_global('rightMovesArray', _frames), 'append', [31, 31, 53]), [47, 47, 104])($B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [54, 54, 65])(locals_exec_one_line_eval.i1), $B.$call(locals_exec.convert, [68, 68, 79])(locals_exec_one_line_eval.i2), [54, 66, 67, 79]), $B.$call(locals_exec.add_something, [82, 82, 103])(locals_exec_one_line_eval.i1, locals_exec_one_line_eval.i2), [66, 80, 81, 103]))
                  $B.set_lineno(frame, 320)
                  var result = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [38, 38, 49])(locals_exec_one_line_eval.i1), $B.$call(locals_exec.convert, [52, 52, 63])(locals_exec_one_line_eval.i2), [38, 50, 51, 63]), $B.$call(locals_exec.add_something, [66, 66, 87])(locals_exec_one_line_eval.i1, locals_exec_one_line_eval.i2), [50, 64, 65, 87])
                  if(locals.$f_trace !== _b_.None){
                    $B.trace_return(result)
                  }
                  $B.leave_frame()
                  return result
                }
              }
            }
          }
        }
        $B.set_lineno(frame, 321)
        var v2918 = $B.rich_op('__sub__', locals_exec.calls, 1, [12, 18, 19, 21])
        locals_exec.calls = v2918
        $B.set_lineno(frame, 322)
        var result = $B.String('')
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_one_line_eval.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    one_line_eval2919.$is_func = true
    one_line_eval2919.$infos = {
      __name__: "one_line_eval", __qualname__: "one_line_eval",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 290,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'one_line_eval',
        co_nlocals: 7,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','move','calls','i1','i2','pos2','v'])
      }
    }
    return one_line_eval2919
  }
  locals_exec.one_line_eval = one_line_eval$2919({})
  locals_exec.one_line_eval.$set_defaults = function(value){
    return locals_exec.one_line_eval = one_line_eval$2919(value)
  }
  locals_exec.one_line_eval.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 324)
  var capture$2922 = function(defaults){
    function capture2922(){
      var locals_exec_capture,
          locals
      locals_exec_capture = locals = $B.args("capture", 2, {pos: null, sq: null} , ['pos', 'sq'], arguments, defaults, null, null)
      var frame = ["capture", locals, "exec", locals_exec, capture2922]
      frame.__file__ = '<string>'
      frame.$lineno = 324
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        var no_break_2920 = true
        for(var next_2920 of $B.next_of1($B.$call(_b_.range, [13, 13, 25])(0, 64), frame, 325)){
          var v2921 = next_2920
          locals_exec_capture.i = v2921
          if($B.set_lineno(frame, 326) && $B.$bool($B.$call(locals_exec.chessmove, [14, 14, 43])($B.$getitem(locals_exec_capture.pos, locals_exec_capture.i, [24, 28, 29]), locals_exec_capture.i, locals_exec_capture.sq, locals_exec_capture.pos))){
            $B.set_lineno(frame, 326)
            var result = 1
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
        }
        $B.set_lineno(frame, 327)
        var result = 0
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_capture.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    capture2922.$is_func = true
    capture2922.$infos = {
      __name__: "capture", __qualname__: "capture",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 324,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'capture',
        co_nlocals: 3,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','sq','i'])
      }
    }
    return capture2922
  }
  locals_exec.capture = capture$2922({})
  locals_exec.capture.$set_defaults = function(value){
    return locals_exec.capture = capture$2922(value)
  }
  locals_exec.capture.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 329)
  var freeCheck$2936 = function(defaults){
    function freeCheck2936(){
      var locals_exec_freeCheck,
          locals
      locals_exec_freeCheck = locals = $B.args("freeCheck", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["freeCheck", locals, "exec", locals_exec, freeCheck2936]
      frame.__file__ = '<string>'
      frame.$lineno = 329
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        var no_break_2923 = true
        for(var next_2923 of $B.next_of1($B.$call(_b_.range, [14, 14, 26])(0, 64), frame, 331)){
          var v2924 = next_2923
          locals_exec_freeCheck.i1 = v2924
          if($B.set_lineno(frame, 332) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_freeCheck.pos, locals_exec_freeCheck.i1, [12, 16, 18]), $B.String(' ')))){
            continue
          }
          var no_break_2925 = true
          for(var next_2925 of $B.next_of1($B.$call(_b_.range, [19, 19, 31])(0, 64), frame, 333)){
            var v2926 = next_2925
            locals_exec_freeCheck.i2 = v2926
            if($B.set_lineno(frame, 334) && $B.$bool($B.$call(locals_exec.chessmove, [19, 19, 50])($B.$getitem(locals_exec_freeCheck.pos, locals_exec_freeCheck.i1, [29, 33, 35]), locals_exec_freeCheck.i1, locals_exec_freeCheck.i2, locals_exec_freeCheck.pos))){
              $B.set_lineno(frame, 335)
              var v2928 = $B.$call($B.$getattr_pep657(locals_exec_freeCheck.pos, 'copy', [30, 30, 38]), [34, 34, 40])()
              locals_exec_freeCheck.pos2 = v2928
              $B.set_lineno(frame, 336)
              var v2929 = $B.$getitem(locals_exec_freeCheck.pos2, locals_exec_freeCheck.i1, [34, 39, 41])
              $B.$setitem(locals_exec_freeCheck.pos2, locals_exec_freeCheck.i2, v2929)
              $B.set_lineno(frame, 337)
              var v2930 = $B.String(' ')
              $B.$setitem(locals_exec_freeCheck.pos2, locals_exec_freeCheck.i1, v2930)
              $B.set_lineno(frame, 338)
              var v2932 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [30, 35, 36, 38])
              locals_exec.move = v2932
              if($B.set_lineno(frame, 339) && $B.$bool((! $B.$bool(locals.$test = $B.$call(locals_exec.check_after_move, [28, 28, 56])(locals_exec_freeCheck.pos2, 0, 0)) ? locals.$test : ! $B.$bool($B.$call(locals_exec.capture, [66, 66, 83])(locals_exec_freeCheck.pos2, locals_exec_freeCheck.i2))))){
                $B.set_lineno(frame, 340)
                var v2934 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [37, 42, 43, 45])
                locals_exec.move = v2934
                $B.set_lineno(frame, 341)
                var result = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [37, 37, 48])(locals_exec_freeCheck.i1), $B.$call(locals_exec.convert, [51, 51, 62])(locals_exec_freeCheck.i2), [37, 49, 50, 62]), $B.$call(locals_exec.add_something, [65, 65, 86])(locals_exec_freeCheck.i1, locals_exec_freeCheck.i2), [49, 63, 64, 86])
                if(locals.$f_trace !== _b_.None){
                  $B.trace_return(result)
                }
                $B.leave_frame()
                return result
              }
              $B.set_lineno(frame, 342)
              var v2935 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [30, 35, 36, 38])
              locals_exec.move = v2935
            }
          }
        }
        $B.set_lineno(frame, 343)
        var result = $B.String('')
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_freeCheck.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    freeCheck2936.$is_func = true
    freeCheck2936.$infos = {
      __name__: "freeCheck", __qualname__: "freeCheck",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 329,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'freeCheck',
        co_nlocals: 5,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','move','i1','i2','pos2'])
      }
    }
    return freeCheck2936
  }
  locals_exec.freeCheck = freeCheck$2936({})
  locals_exec.freeCheck.$set_defaults = function(value){
    return locals_exec.freeCheck = freeCheck$2936(value)
  }
  locals_exec.freeCheck.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 345)
  var opening$2937 = function(defaults){
    function opening2937(){
      var locals_exec_opening,
          locals
      locals_exec_opening = locals = $B.args("opening", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["opening", locals, "exec", locals_exec, opening2937]
      frame.__file__ = '<string>'
      frame.$lineno = 345
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        if($B.set_lineno(frame, 347) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec.move, 0)) ? locals.$test : $B.$call(locals_exec.chessmove, [24, 24, 55])($B.$getitem(locals_exec_opening.pos, 52, [34, 38, 40]), 52, 44, locals_exec_opening.pos)))){
          $B.set_lineno(frame, 347)
          var result = $B.String("e2e3")
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 348) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec.move, 1)) ? locals.$test : $B.$call(locals_exec.chessmove, [24, 24, 55])($B.$getitem(locals_exec_opening.pos, 12, [34, 38, 40]), 12, 20, locals_exec_opening.pos)))){
          $B.set_lineno(frame, 348)
          var result = $B.String("e7e6")
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 349) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec.move, 2)) ? locals.$test : $B.$call(locals_exec.chessmove, [24, 24, 55])($B.$getitem(locals_exec_opening.pos, 59, [34, 38, 40]), 59, 52, locals_exec_opening.pos)))){
          $B.set_lineno(frame, 349)
          var result = $B.String("d1e2")
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 350) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec.move, 3)) ? locals.$test : $B.$call(locals_exec.chessmove, [24, 24, 53])($B.$getitem(locals_exec_opening.pos, 5, [34, 38, 39]), 5, 12, locals_exec_opening.pos)))){
          $B.set_lineno(frame, 350)
          var result = $B.String("d8e7")
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 351)
        var result = 0
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_opening.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    opening2937.$is_func = true
    opening2937.$infos = {
      __name__: "opening", __qualname__: "opening",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 345,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'opening',
        co_nlocals: 1,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos'])
      }
    }
    return opening2937
  }
  locals_exec.opening = opening$2937({})
  locals_exec.opening.$set_defaults = function(value){
    return locals_exec.opening = opening$2937(value)
  }
  locals_exec.opening.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 353)
  var isMoveGood$2973 = function(defaults){
    function isMoveGood2973(){
      var locals_exec_isMoveGood,
          locals
      locals_exec_isMoveGood = locals = $B.args("isMoveGood", 2, {pos: null, one_const: null} , ['pos', 'one_const'], arguments, defaults, null, null)
      var frame = ["isMoveGood", locals, "exec", locals_exec, isMoveGood2973]
      frame.__file__ = '<string>'
      frame.$lineno = 353
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 355)
        var v2938 = $B.$list([])
        locals_exec_isMoveGood.badmoves = v2938
        $B.set_lineno(frame, 356)
        var v2939 = $B.$list([])
        locals_exec_isMoveGood.truemoves = v2939
        if($B.set_lineno(frame, 357) && $B.$bool(! $B.$bool(locals_exec_isMoveGood.pos))){
          $B.set_lineno(frame, 357)
          var result = $B.$list([])
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 363)
        var v2940 = 10
        locals_exec_isMoveGood.minCost = v2940
        $B.set_lineno(frame, 364)
        var v2941 = 0
        locals_exec_isMoveGood.cheapConst = v2941
        $B.set_lineno(frame, 365)
        var v2942 = $B.$call($B.$getattr_pep657($B.resolve_in_scopes('time', [locals_exec_isMoveGood,locals_exec,_b_], [21,21,25]), 'time', [21, 21, 30]), [26, 26, 32])()
        locals_exec.spent_time = v2942
        $B.set_lineno(frame, 366)
        var v2943 = $B.$call(locals_exec.one_line_eval, [20, 20, 38])(locals_exec_isMoveGood.pos)
        locals_exec_isMoveGood.Checkmate = v2943
        if($B.set_lineno(frame, 367) && $B.$bool(locals_exec_isMoveGood.Checkmate)){
          $B.set_lineno(frame, 368)
          var v2944 = $B.$list([])
          locals_exec.rightMovesArray = v2944
          $B.set_lineno(frame, 369)
          var result = 100
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        var no_break_2945 = true
        for(var next_2945 of $B.next_of1($B.$call(_b_.range, [18, 18, 30])(0, 64), frame, 372)){
          var v2946 = next_2945
          locals_exec_isMoveGood.s1 = v2946
          if($B.set_lineno(frame, 373) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [18, 22, 24]), $B.String(" ")))){
            continue
          }
          var no_break_2947 = true
          for(var next_2947 of $B.next_of1($B.$call(_b_.range, [24, 24, 36])(0, 64), frame, 374)){
            var v2948 = next_2947
            locals_exec_isMoveGood.s2 = v2948
            if($B.set_lineno(frame, 375) && $B.$bool($B.$call(locals_exec.chessmove, [24, 24, 55])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [34, 38, 40]), locals_exec_isMoveGood.s1, locals_exec_isMoveGood.s2, locals_exec_isMoveGood.pos))){
              $B.set_lineno(frame, 382)
              var v2951 = $B.rich_op('__add__', $B.$call(locals_exec.protect_attack, [35, 35, 62])(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, locals_exec_isMoveGood.s1), 1, [35, 63, 64, 66])
              locals_exec_isMoveGood.cheap = v2951
              if($B.set_lineno(frame, 383) && $B.$bool($B.rich_comp('__ne__', $B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, [31, 35, 37]), $B.String(" ")))){
                if($B.set_lineno(frame, 384) && $B.$bool($B.rich_comp('__ge__', $B.rich_op('__sub__', $B.$call(locals_exec.cost, [38, 38, 51])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [43, 47, 49])), $B.$call(locals_exec.cost, [54, 54, 67])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, [59, 63, 65])), [38, 52, 53, 67]), 0))){
                  $B.set_lineno(frame, 385)
                  var v2954 = $B.$call(locals_exec.protect_attack, [50, 50, 77])(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, locals_exec_isMoveGood.s1)
                  locals_exec_isMoveGood.cheap = v2954
                  if($B.set_lineno(frame, 387) && $B.$bool($B.rich_comp('__lt__', locals_exec_isMoveGood.cheap, 0))){
                    $B.set_lineno(frame, 388)
                    var v2956 = $B.rich_op('__sub__', $B.rich_op('__mul__', $B.$call(locals_exec.cost, [54, 54, 67])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [59, 63, 65])), {__class__: _b_.float, value: 0.001}, [54, 67, 68, 73]), $B.$call(locals_exec.cost, [76, 76, 89])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, [81, 85, 87])), [67, 74, 75, 89])
                    locals_exec_isMoveGood.cheap = v2956
                  }else{
                    $B.set_lineno(frame, 389)
                    var v2957 = $B.rich_op('__sub__', $B.$call(locals_exec.cost, [56, 56, 69])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [61, 65, 67])), $B.$call(locals_exec.cost, [72, 72, 85])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, [77, 81, 83])), [56, 70, 71, 85])
                    locals_exec_isMoveGood.cheap = v2957
                  }
                }else{
                  $B.set_lineno(frame, 391)
                  var v2958 = $B.$getattr($B.get_class(locals.$result = $B.$call(locals_exec.cost, [50, 50, 63])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s2, [55, 59, 61]))), '__neg__')(locals.$result)
                  locals_exec_isMoveGood.cheap = v2958
                }
                if($B.set_lineno(frame, 392) && $B.$bool($B.rich_comp('__lt__', locals_exec_isMoveGood.cheap, locals_exec_isMoveGood.minCost))){
                  $B.set_lineno(frame, 393)
                  var v2959 = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [50, 50, 61])(locals_exec_isMoveGood.s1), $B.$call(locals_exec.convert, [64, 64, 75])(locals_exec_isMoveGood.s2), [50, 62, 63, 75]), $B.$call(locals_exec.add_something, [78, 78, 99])(locals_exec_isMoveGood.s1, locals_exec_isMoveGood.s2), [62, 76, 77, 99])
                  locals_exec_isMoveGood.bestMove = v2959
                  $B.set_lineno(frame, 394)
                  var v2960 = locals_exec_isMoveGood.cheap
                  locals_exec_isMoveGood.minCost = v2960
                }
              }else{
                $B.set_lineno(frame, 396)
                var v2961 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [41, 46, 47, 49])
                locals_exec.move = v2961
                $B.set_lineno(frame, 397)
                var v2962 = $B.$call($B.$getattr_pep657(locals_exec_isMoveGood.pos, 'copy', [41, 41, 49]), [45, 45, 51])()
                locals_exec_isMoveGood.pos2 = v2962
                $B.set_lineno(frame, 398)
                var v2963 = $B.$getitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s1, [45, 50, 52])
                $B.$setitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s2, v2963)
                $B.set_lineno(frame, 399)
                var v2964 = $B.String(" ")
                $B.$setitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s1, v2964)
                if($B.set_lineno(frame, 400) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__le__', locals_exec_isMoveGood.cheap, 0)) ? locals.$test : $B.rich_comp('__ge__', $B.$call(locals_exec.what_capture, [56, 56, 78])(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s2), $B.$call(locals_exec.cost, [82, 82, 96])($B.$getitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s2, [87, 92, 94])))))){
                  $B.set_lineno(frame, 401)
                  var v2965 = 0
                  locals_exec_isMoveGood.cheap = v2965
                }else{
                  $B.set_lineno(frame, 402)
                  var v2966 = $B.$call(locals_exec.cost, [48, 48, 61])($B.$getitem(locals_exec_isMoveGood.pos, locals_exec_isMoveGood.s1, [53, 57, 59]))
                  locals_exec_isMoveGood.cheap = v2966
                }
                $B.set_lineno(frame, 403)
                var v2967 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [41, 46, 47, 49])
                locals_exec.move = v2967
              }
              $B.set_lineno(frame, 405)
              var v2968 = $B.$call($B.$getattr_pep657(locals_exec_isMoveGood.pos, 'copy', [34, 34, 42]), [38, 38, 44])()
              locals_exec_isMoveGood.pos2 = v2968
              $B.set_lineno(frame, 406)
              var v2969 = $B.$getitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s1, [38, 43, 45])
              $B.$setitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s2, v2969)
              $B.set_lineno(frame, 407)
              var v2970 = $B.String(" ")
              $B.$setitem(locals_exec_isMoveGood.pos2, locals_exec_isMoveGood.s1, v2970)
              $B.set_lineno(frame, 408)
              var v2971 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [34, 39, 40, 42])
              locals_exec.move = v2971
              if($B.set_lineno(frame, 409) && $B.$bool($B.rich_comp('__eq__', $B.$call(locals_exec.variants_of_move, [32, 32, 54])(locals_exec_isMoveGood.pos2), 0))){
                if($B.set_lineno(frame, 410) && $B.$bool($B.$call(locals_exec.check_after_move, [35, 35, 63])(locals_exec_isMoveGood.pos2, 0, 0))){
                  $B.set_lineno(frame, 410)
                  var result = 100
                  if(locals.$f_trace !== _b_.None){
                    $B.trace_return(result)
                  }
                  $B.leave_frame()
                  return result
                }
              }else if($B.set_lineno(frame, 411) && $B.$bool($B.rich_comp('__gt__', locals_exec_isMoveGood.cheap, 0))){
                $B.set_lineno(frame, 412);
                $B.$call($B.$getattr_pep657(locals_exec_isMoveGood.badmoves, 'append', [31, 31, 46]), [40, 40, 106])($B.$list([$B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [48, 48, 59])(locals_exec_isMoveGood.s1), $B.$call(locals_exec.convert, [62, 62, 73])(locals_exec_isMoveGood.s2), [48, 60, 61, 73]), $B.$call(locals_exec.add_something, [76, 76, 97])(locals_exec_isMoveGood.s1, locals_exec_isMoveGood.s2), [60, 74, 75, 97]), locals_exec_isMoveGood.cheap]))
              }else{
                $B.set_lineno(frame, 413);
                $B.$call($B.$getattr_pep657(locals_exec_isMoveGood.truemoves, 'append', [33, 33, 49]), [43, 43, 100])($B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [50, 50, 61])(locals_exec_isMoveGood.s1), $B.$call(locals_exec.convert, [64, 64, 75])(locals_exec_isMoveGood.s2), [50, 62, 63, 75]), $B.$call(locals_exec.add_something, [78, 78, 99])(locals_exec_isMoveGood.s1, locals_exec_isMoveGood.s2), [62, 76, 77, 99]))
              }
              $B.set_lineno(frame, 414)
              var v2972 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [34, 39, 40, 42])
              locals_exec.move = v2972
            }
          }
        }
        if($B.set_lineno(frame, 415) && $B.$bool($B.rich_comp('__lt__', locals_exec_isMoveGood.minCost, locals_exec_isMoveGood.cheapConst))){
          $B.set_lineno(frame, 416)
          var result = $B.$call(_b_.abs, [20, 20, 32])(locals_exec_isMoveGood.minCost)
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 417) && $B.$bool(! $B.$bool(locals_exec_isMoveGood.truemoves))){
          $B.set_lineno(frame, 418)
          var result = -1
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 419)
        var result = 0
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_isMoveGood.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    isMoveGood2973.$is_func = true
    isMoveGood2973.$infos = {
      __name__: "isMoveGood", __qualname__: "isMoveGood",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 353,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'isMoveGood',
        co_nlocals: 15,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','one_const','move','spent_time','rightMovesArray','badmoves','truemoves','minCost','cheapConst','Checkmate','s1','s2','cheap','bestMove','pos2'])
      }
    }
    return isMoveGood2973
  }
  locals_exec.isMoveGood = isMoveGood$2973({})
  locals_exec.isMoveGood.$set_defaults = function(value){
    return locals_exec.isMoveGood = isMoveGood$2973(value)
  }
  locals_exec.isMoveGood.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 421)
  var FENtranslate$3015 = function(defaults){
    function FENtranslate3015(){
      var locals_exec_FENtranslate,
          locals
      locals_exec_FENtranslate = locals = $B.args("FENtranslate", 2, {pos: null, one_const: null} , ['pos', 'one_const'], arguments, defaults, null, null)
      var frame = ["FENtranslate", locals, "exec", locals_exec, FENtranslate3015]
      frame.__file__ = '<string>'
      frame.$lineno = 421
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 423)
        var v2974 = $B.$list([])
        locals_exec_FENtranslate.badmoves = v2974
        $B.set_lineno(frame, 424)
        var v2975 = $B.$list([])
        locals_exec_FENtranslate.truemoves = v2975
        if($B.set_lineno(frame, 425) && $B.$bool(! $B.$bool(locals_exec_FENtranslate.pos))){
          $B.set_lineno(frame, 425)
          var result = $B.$list([])
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 431)
        var v2976 = 10
        locals_exec_FENtranslate.minCost = v2976
        $B.set_lineno(frame, 432)
        var v2977 = 0
        locals_exec_FENtranslate.cheapConst = v2977
        $B.set_lineno(frame, 433)
        var v2978 = $B.$call($B.$getattr_pep657($B.resolve_in_scopes('time', [locals_exec_FENtranslate,locals_exec,_b_], [21,21,25]), 'time', [21, 21, 30]), [26, 26, 32])()
        locals_exec.spent_time = v2978
        if($B.set_lineno(frame, 434) && $B.$bool(locals_exec.rightMovesArray)){
          $B.set_lineno(frame, 435)
          var v2979 = $B.$getitem($B.resolve_global('rightMovesArray', _frames), $B.rich_op('__sub__', $B.$call(_b_.len, [34, 34, 54])($B.resolve_global('rightMovesArray', _frames)), 1, [34, 54, 55, 56]), [18, 54, 55])
          locals_exec_FENtranslate.ans = v2979
          $B.set_lineno(frame, 436);
          $B.$call($B.$getattr_pep657($B.resolve_global('rightMovesArray', _frames), 'pop', [12, 12, 31]), [28, 28, 55])($B.rich_op('__sub__', $B.$call(_b_.len, [32, 32, 52])($B.resolve_global('rightMovesArray', _frames)), 1, [32, 52, 53, 54]))
          $B.set_lineno(frame, 437)
          var result = locals_exec_FENtranslate.ans
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 438)
        var v2980 = $B.$call(locals_exec.one_line_eval, [20, 20, 38])(locals_exec_FENtranslate.pos)
        locals_exec_FENtranslate.Checkmate = v2980
        if($B.set_lineno(frame, 439) && $B.$bool(locals_exec_FENtranslate.Checkmate)){
          $B.set_lineno(frame, 440)
          var v2981 = $B.$getitem($B.resolve_global('rightMovesArray', _frames), $B.rich_op('__sub__', $B.$call(_b_.len, [34, 34, 54])($B.resolve_global('rightMovesArray', _frames)), 1, [34, 54, 55, 56]), [18, 54, 55])
          locals_exec_FENtranslate.ans = v2981
          $B.set_lineno(frame, 441);
          $B.$call($B.$getattr_pep657($B.resolve_global('rightMovesArray', _frames), 'pop', [12, 12, 31]), [28, 28, 55])($B.rich_op('__sub__', $B.$call(_b_.len, [32, 32, 52])($B.resolve_global('rightMovesArray', _frames)), 1, [32, 52, 53, 54]))
          $B.set_lineno(frame, 442)
          var result = locals_exec_FENtranslate.ans
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 445);
        $B.$call(_b_.print, [8, 8, 20])($B.String('ok2'))
        var no_break_2982 = true
        for(var next_2982 of $B.next_of1($B.$call(_b_.range, [18, 18, 30])(0, 64), frame, 446)){
          var v2983 = next_2982
          locals_exec_FENtranslate.s1 = v2983
          if($B.set_lineno(frame, 447) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [18, 22, 24]), $B.String(" ")))){
            continue
          }
          var no_break_2984 = true
          for(var next_2984 of $B.next_of1($B.$call(_b_.range, [24, 24, 36])(0, 64), frame, 448)){
            var v2985 = next_2984
            locals_exec_FENtranslate.s2 = v2985
            if($B.set_lineno(frame, 449) && $B.$bool($B.$call(locals_exec.chessmove, [24, 24, 55])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [34, 38, 40]), locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2, locals_exec_FENtranslate.pos))){
              $B.set_lineno(frame, 456)
              var v2988 = $B.rich_op('__add__', $B.$call(locals_exec.protect_attack, [35, 35, 62])(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, locals_exec_FENtranslate.s1), 1, [35, 63, 64, 66])
              locals_exec_FENtranslate.cheap = v2988
              if($B.set_lineno(frame, 457) && $B.$bool($B.rich_comp('__ne__', $B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, [31, 35, 37]), $B.String(" ")))){
                if($B.set_lineno(frame, 458) && $B.$bool($B.rich_comp('__gt__', $B.rich_op('__sub__', $B.$call(locals_exec.cost, [38, 38, 51])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [43, 47, 49])), $B.$call(locals_exec.cost, [54, 54, 67])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, [59, 63, 65])), [38, 52, 53, 67]), 0))){
                  $B.set_lineno(frame, 459)
                  var v2991 = $B.$call(locals_exec.protect_attack, [50, 50, 77])(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, locals_exec_FENtranslate.s1)
                  locals_exec_FENtranslate.cheap = v2991
                  if($B.set_lineno(frame, 461) && $B.$bool($B.rich_comp('__lt__', locals_exec_FENtranslate.cheap, 0))){
                    $B.set_lineno(frame, 462)
                    var v2993 = $B.rich_op('__sub__', $B.rich_op('__mul__', $B.$call(locals_exec.cost, [54, 54, 67])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [59, 63, 65])), {__class__: _b_.float, value: 0.001}, [54, 67, 68, 73]), $B.$call(locals_exec.cost, [76, 76, 89])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, [81, 85, 87])), [67, 74, 75, 89])
                    locals_exec_FENtranslate.cheap = v2993
                  }else{
                    $B.set_lineno(frame, 463)
                    var v2994 = $B.rich_op('__sub__', $B.$call(locals_exec.cost, [56, 56, 69])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [61, 65, 67])), $B.$call(locals_exec.cost, [72, 72, 85])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, [77, 81, 83])), [56, 70, 71, 85])
                    locals_exec_FENtranslate.cheap = v2994
                  }
                }else{
                  $B.set_lineno(frame, 465)
                  var v2995 = $B.$getattr($B.get_class(locals.$result = $B.$call(locals_exec.cost, [50, 50, 63])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s2, [55, 59, 61]))), '__neg__')(locals.$result)
                  locals_exec_FENtranslate.cheap = v2995
                }
              }else{
                $B.set_lineno(frame, 470)
                var v2996 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [41, 46, 47, 49])
                locals_exec.move = v2996
                $B.set_lineno(frame, 471)
                var v2997 = $B.$call($B.$getattr_pep657(locals_exec_FENtranslate.pos, 'copy', [41, 41, 49]), [45, 45, 51])()
                locals_exec_FENtranslate.pos2 = v2997
                $B.set_lineno(frame, 472)
                var v2998 = $B.$getitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s1, [45, 50, 52])
                $B.$setitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s2, v2998)
                $B.set_lineno(frame, 473)
                var v2999 = $B.String(" ")
                $B.$setitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s1, v2999)
                if($B.set_lineno(frame, 474) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__le__', locals_exec_FENtranslate.cheap, 0)) ? locals.$test : $B.rich_comp('__ge__', $B.$call(locals_exec.what_capture, [56, 56, 78])(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s2), $B.$call(locals_exec.cost, [82, 82, 96])($B.$getitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s2, [87, 92, 94])))))){
                  $B.set_lineno(frame, 475)
                  var v3000 = 0
                  locals_exec_FENtranslate.cheap = v3000
                }else{
                  $B.set_lineno(frame, 476)
                  var v3001 = $B.$call(locals_exec.cost, [48, 48, 61])($B.$getitem(locals_exec_FENtranslate.pos, locals_exec_FENtranslate.s1, [53, 57, 59]))
                  locals_exec_FENtranslate.cheap = v3001
                }
                $B.set_lineno(frame, 477)
                var v3002 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [41, 46, 47, 49])
                locals_exec.move = v3002
              }
              $B.set_lineno(frame, 479)
              var v3003 = $B.$call($B.$getattr_pep657(locals_exec_FENtranslate.pos, 'copy', [34, 34, 42]), [38, 38, 44])()
              locals_exec_FENtranslate.pos2 = v3003
              $B.set_lineno(frame, 480)
              var v3004 = $B.$getitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s1, [38, 43, 45])
              $B.$setitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s2, v3004)
              $B.set_lineno(frame, 481)
              var v3005 = $B.String(" ")
              $B.$setitem(locals_exec_FENtranslate.pos2, locals_exec_FENtranslate.s1, v3005)
              $B.set_lineno(frame, 482)
              var v3006 = $B.rich_op('__add__', $B.resolve_global('move', _frames), 1, [34, 39, 40, 42])
              locals_exec.move = v3006
              if($B.set_lineno(frame, 483) && $B.$bool($B.rich_comp('__eq__', $B.$call(locals_exec.variants_of_move, [32, 32, 54])(locals_exec_FENtranslate.pos2), 0))){
                if($B.set_lineno(frame, 484) && $B.$bool($B.$call(locals_exec.check_after_move, [35, 35, 63])(locals_exec_FENtranslate.pos2, 0, 0))){
                  $B.set_lineno(frame, 485)
                  var result = $B.rich_op('__add__', $B.$call(locals_exec.convert, [43, 43, 54])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [57, 57, 68])(locals_exec_FENtranslate.s2), [43, 55, 56, 68])
                  if(locals.$f_trace !== _b_.None){
                    $B.trace_return(result)
                  }
                  $B.leave_frame()
                  return result
                }else{
                  $B.set_lineno(frame, 486);
                  $B.$call($B.$getattr_pep657(locals_exec_FENtranslate.badmoves, 'append', [37, 37, 52]), [46, 46, 110])($B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [53, 53, 64])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [67, 67, 78])(locals_exec_FENtranslate.s2), [53, 65, 66, 78]), $B.$call(locals_exec.add_something, [81, 81, 102])(locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2), [65, 79, 80, 102]), $B.String('100'))
                }
              }else{
                $B.set_lineno(frame, 488)
                var v3008 = $B.$call(locals_exec.isMoveGood, [35, 35, 54])(locals_exec_FENtranslate.pos2, 1)
                locals_exec_FENtranslate.p = v3008
                if($B.set_lineno(frame, 489) && $B.$bool($B.rich_comp('__gt__', locals_exec_FENtranslate.p, $B.rich_op('__sub__', 0, locals_exec_FENtranslate.cheap, [39, 40, 41, 46])))){
                  $B.set_lineno(frame, 491);
                  $B.$call($B.$getattr_pep657(locals_exec_FENtranslate.badmoves, 'append', [37, 37, 52]), [46, 46, 108])($B.$list([$B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [54, 54, 65])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [68, 68, 79])(locals_exec_FENtranslate.s2), [54, 66, 67, 79]), $B.$call(locals_exec.add_something, [82, 82, 103])(locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2), [66, 80, 81, 103]), locals_exec_FENtranslate.p]))
                }else if($B.set_lineno(frame, 492) && $B.$bool((! $B.$bool(locals.$test = $B.rich_comp('__eq__', locals_exec_FENtranslate.p, -1)) ? locals.$test : $B.rich_comp('__gt__', $B.$call(locals_exec.variants_of_move, [51, 51, 73])(locals_exec_FENtranslate.pos2), 0)))){
                  $B.set_lineno(frame, 493)
                  var v3009 = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [48, 48, 59])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [62, 62, 73])(locals_exec_FENtranslate.s2), [48, 60, 61, 73]), $B.$call(locals_exec.add_something, [76, 76, 97])(locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2), [60, 74, 75, 97])
                  locals_exec_FENtranslate.bestMove = v3009
                  $B.set_lineno(frame, 494)
                  var v3010 = -100
                  locals_exec_FENtranslate.minCost = v3010
                }else{
                  $B.set_lineno(frame, 496);
                  $B.$call($B.$getattr_pep657(locals_exec_FENtranslate.truemoves, 'append', [37, 37, 53]), [47, 47, 104])($B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [54, 54, 65])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [68, 68, 79])(locals_exec_FENtranslate.s2), [54, 66, 67, 79]), $B.$call(locals_exec.add_something, [82, 82, 103])(locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2), [66, 80, 81, 103]))
                  if($B.set_lineno(frame, 497) && $B.$bool($B.rich_comp('__lt__', locals_exec_FENtranslate.cheap, locals_exec_FENtranslate.minCost))){
                    $B.set_lineno(frame, 498);
                    $B.$call(_b_.print, [42, 42, 63])(locals_exec_FENtranslate.cheap, locals_exec_FENtranslate.minCost)
                    $B.set_lineno(frame, 499)
                    var v3011 = $B.rich_op('__add__', $B.rich_op('__add__', $B.$call(locals_exec.convert, [53, 53, 64])(locals_exec_FENtranslate.s1), $B.$call(locals_exec.convert, [67, 67, 78])(locals_exec_FENtranslate.s2), [53, 65, 66, 78]), $B.$call(locals_exec.add_something, [81, 81, 102])(locals_exec_FENtranslate.s1, locals_exec_FENtranslate.s2), [65, 79, 80, 102])
                    locals_exec_FENtranslate.bestMove = v3011
                    $B.set_lineno(frame, 500)
                    var v3012 = locals_exec_FENtranslate.cheap
                    locals_exec_FENtranslate.minCost = v3012
                  }
                }
              }
              $B.set_lineno(frame, 501)
              var v3013 = $B.rich_op('__sub__', $B.resolve_global('move', _frames), 1, [34, 39, 40, 42])
              locals_exec.move = v3013
            }
          }
        }
        $B.set_lineno(frame, 502);
        $B.$call(_b_.print, [8, 8, 23])(locals_exec_FENtranslate.badmoves)
        if($B.set_lineno(frame, 503) && $B.$bool($B.rich_comp('__lt__', locals_exec_FENtranslate.minCost, locals_exec_FENtranslate.cheapConst))){
          $B.set_lineno(frame, 504);
          $B.$call(_b_.print, [13, 13, 75])($B.String("So we return bestmove "), $B.resolve_local('bestMove', [45,45,53]), $B.String(', mark ='), locals_exec_FENtranslate.minCost)
          $B.set_lineno(frame, 505)
          var result = $B.resolve_local('bestMove', [20,20,28])
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        if($B.set_lineno(frame, 506) && $B.$bool(! $B.$bool(locals_exec_FENtranslate.truemoves))){
          $B.set_lineno(frame, 507);
          $B.$call(locals_exec.append_to_jornal, [14, 14, 50])($B.String("NOT TRUE MOVES!!"))
          if($B.set_lineno(frame, 508) && $B.$bool(locals_exec_FENtranslate.badmoves)){
            $B.set_lineno(frame, 508)
            var result = $B.$call(locals_exec.bestbad, [36, 36, 53])(locals_exec_FENtranslate.badmoves)
            if(locals.$f_trace !== _b_.None){
              $B.trace_return(result)
            }
            $B.leave_frame()
            return result
          }
          $B.set_lineno(frame, 509)
          var result = $B.String("")
          if(locals.$f_trace !== _b_.None){
            $B.trace_return(result)
          }
          $B.leave_frame()
          return result
        }
        $B.set_lineno(frame, 510)
        var result = $B.$getitem(locals_exec_FENtranslate.truemoves, $B.$call($B.$getattr_pep657(locals_exec.Math, 'floor', [25, 25, 35]), [30, 30, 67])($B.rich_op('__sub__', $B.rich_op('__mul__', $B.$call($B.$getattr_pep657(locals_exec.Math, 'random', [36, 36, 47]), [41, 41, 49])(), $B.$call(_b_.len, [50, 50, 64])(locals_exec_FENtranslate.truemoves), [41, 49, 50, 64]), 1, [49, 64, 65, 66])), [15, 30, 67])
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_FENtranslate.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    FENtranslate3015.$is_func = true
    FENtranslate3015.$infos = {
      __name__: "FENtranslate", __qualname__: "FENtranslate",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 2,
        co_filename: '<string>',
        co_firstlineno: 421,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'FENtranslate',
        co_nlocals: 16,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','one_const','move','spent_time','badmoves','truemoves','minCost','cheapConst','ans','Checkmate','s1','s2','cheap','pos2','p','bestMove'])
      }
    }
    return FENtranslate3015
  }
  locals_exec.FENtranslate = FENtranslate$3015({})
  locals_exec.FENtranslate.$set_defaults = function(value){
    return locals_exec.FENtranslate = FENtranslate$3015(value)
  }
  locals_exec.FENtranslate.__annotations__ = $B.empty_dict()
  
  $B.set_lineno(frame, 512)
  var FENtranslate2$3026 = function(defaults){
    function FENtranslate23026(){
      var locals_exec_FENtranslate2,
          locals
      locals_exec_FENtranslate2 = locals = $B.args("FENtranslate2", 1, {pos: null} , ['pos'], arguments, defaults, null, null)
      var frame = ["FENtranslate2", locals, "exec", locals_exec, FENtranslate23026]
      frame.__file__ = '<string>'
      frame.$lineno = 512
      locals.$f_trace = $B.enter_frame(frame)
      var _frames = $B.frames_stack.slice()
      var stack_length = $B.frames_stack.length
      try{
        $B.js_this = this
        $B.set_lineno(frame, 514)
        var v3016 = $B.$list([])
        locals_exec_FENtranslate2.res = v3016
        var no_break_3017 = true
        for(var next_3017 of $B.next_of1($B.$call(_b_.range, [17, 17, 35])(0, $B.$call(_b_.len, [26, 26, 34])(locals_exec_FENtranslate2.pos)), frame, 515)){
          var v3018 = next_3017
          locals_exec_FENtranslate2.i = v3018
          if($B.set_lineno(frame, 516) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_FENtranslate2.pos, locals_exec_FENtranslate2.i, [18, 22, 23]), $B.String("/")))){
            continue
          }
          if($B.set_lineno(frame, 517) && $B.$bool($B.rich_comp('__eq__', $B.$getitem(locals_exec_FENtranslate2.pos, locals_exec_FENtranslate2.i, [18, 22, 23]), $B.String(" ")))){
            $B.set_lineno(frame, 518)
            var v3019 = $B.$getitem(locals_exec_FENtranslate2.pos, $B.rich_op('__add__', locals_exec_FENtranslate2.i, 1, [27, 28, 29, 30]), [23, 28, 29])
            locals_exec_FENtranslate2.p = v3019
            no_break_3017 = false
            break
          }
          if($B.set_lineno(frame, 520) && $B.$bool($B.$call($B.$getattr_pep657($B.$getitem(locals_exec_FENtranslate2.pos, locals_exec_FENtranslate2.i, [18, 22, 23]), 'isnumeric', [18, 18, 34]), [25, 25, 36])())){
            $B.set_lineno(frame, 521)
            var v3021 = $B.$call(_b_.int, [23, 23, 34])($B.$getitem(locals_exec_FENtranslate2.pos, locals_exec_FENtranslate2.i, [27, 31, 32]))
            locals_exec_FENtranslate2.n = v3021
            var no_break_3022 = true
            for(var next_3022 of $B.next_of1($B.$call(_b_.range, [28, 28, 39])(0, locals_exec_FENtranslate2.n), frame, 522)){
              var v3023 = next_3022
              locals_exec_FENtranslate2.k = v3023
              $B.set_lineno(frame, 522);
              $B.$call($B.$getattr_pep657(locals_exec_FENtranslate2.res, 'append', [41, 41, 51]), [45, 45, 56])($B.String(" "))
            }
          }else{
            $B.set_lineno(frame, 524);
            $B.$call($B.$getattr_pep657(locals_exec_FENtranslate2.res, 'append', [16, 16, 26]), [20, 20, 41])($B.$call(locals_exec.trans, [27, 27, 40])($B.$getitem(locals_exec_FENtranslate2.pos, locals_exec_FENtranslate2.i, [33, 37, 38])))
          }
        }
        if($B.set_lineno(frame, 525) && $B.$bool($B.rich_comp('__eq__', $B.resolve_local('p', [12,12,13]), $B.String("w")))){
          $B.set_lineno(frame, 526)
          var v3024 = 0
          locals_exec.move = v3024
        }else{
          $B.set_lineno(frame, 527)
          var v3025 = 1
          locals_exec.move = v3025
        }
        $B.set_lineno(frame, 528)
        var result = locals_exec_FENtranslate2.res
        if(locals.$f_trace !== _b_.None){
          $B.trace_return(result)
        }
        $B.leave_frame()
        return result
      }catch(err){
        $B.set_exc(err)
        if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
          locals_exec_FENtranslate2.$f_trace = $B.trace_exception()
        }
        $B.leave_frame();throw err
      }
    }
    FENtranslate23026.$is_func = true
    FENtranslate23026.$infos = {
      __name__: "FENtranslate2", __qualname__: "FENtranslate2",
      __defaults__: $B.fast_tuple([]), __kwdefaults__: $B.fast_tuple([]),
      __doc__: _b_.None,
      __code__:{
        co_argcount: 1,
        co_filename: '<string>',
        co_firstlineno: 512,
        co_flags: 67,
        co_freevars: $B.fast_tuple([]),
        co_kwonlyargcount: 0,
        co_name: 'FENtranslate2',
        co_nlocals: 7,
        co_posonlyargcount: 0,
        co_varnames: $B.fast_tuple(['pos','move','res','i','p','n','k'])
      }
    }
    return FENtranslate23026
  }
  locals_exec.FENtranslate2 = FENtranslate2$3026({})
  locals_exec.FENtranslate2.$set_defaults = function(value){
    return locals_exec.FENtranslate2 = FENtranslate2$3026(value)
  }
  locals_exec.FENtranslate2.__annotations__ = $B.empty_dict()
  $B.leave_frame({locals, value: _b_.None})
}catch(err){
  $B.set_exc(err)
  if((! err.$in_trace_func) && locals.$f_trace !== _b_.None){
    locals.$f_trace = $B.trace_exception()
  }
  $B.leave_frame({locals, value: _b_.None})
  throw err
}