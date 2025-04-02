---
tags:
  - AI
  - nvidia
---

## ERROR


```bash

Installing dependencies from lock file

Package operations: 17 installs, 0 updates, 0 removals

  - Installing tensorrt-cu12 (10.7.0): Preparing...
  - Installing tensorrt-cu12 (10.7.0): Failed

  ChefBuildError

  Backend subprocess exited when trying to invoke build_wheel
  
  running bdist_wheel
  /tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/cmd.py:124: SetuptoolsDeprecationWarning: bdist_wheel.universal is deprecated
  !!
  
          ********************************************************************************
          With Python 2.7 end-of-life, support for building universal wheels
          (i.e., wheels that support both Python 2 and Python 3)
          is being obviated.
          Please discontinue using this option, or if you still need it,
          file an issue with pypa/setuptools describing your use case.
  
          By 2025-Aug-30, you need to update your project and remove deprecated calls
          or your builds will no longer be supported.
          ********************************************************************************
  
  !!
    self.finalize_options()
  running build
  running build_py
  creating build/lib/tensorrt
  copying tensorrt/__init__.py -> build/lib/tensorrt
  running egg_info
  writing tensorrt_cu12.egg-info/PKG-INFO
  writing dependency_links to tensorrt_cu12.egg-info/dependency_links.txt
  writing requirements to tensorrt_cu12.egg-info/requires.txt
  writing top-level names to tensorrt_cu12.egg-info/top_level.txt
  reading manifest file 'tensorrt_cu12.egg-info/SOURCES.txt'
  adding license file 'LICENSE.txt'
  writing manifest file 'tensorrt_cu12.egg-info/SOURCES.txt'
  installing to build/bdist.linux-x86_64/wheel
  running install
  Looking in indexes: https://pypi.org/simple, https://pypi.nvidia.com
  Collecting tensorrt_cu12_libs==10.7.0
    Downloading https://pypi.nvidia.com/tensorrt-cu12-libs/tensorrt_cu12_libs-10.7.0-py2.py3-none-manylinux_2_17_x86_64.whl (2070.0 MB)
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 GB 19.1 MB/s eta 0:00:00
  ERROR: Could not find a version that satisfies the requirement tensorrt_cu12_bindings==10.7.0 (from versions: none)
  ERROR: No matching distribution found for tensorrt_cu12_bindings==10.7.0
  Looking in indexes: https://pypi.org/simple, https://pypi.nvidia.com
  Collecting tensorrt_cu12_libs==10.7.0
    Downloading https://pypi.nvidia.com/tensorrt-cu12-libs/tensorrt_cu12_libs-10.7.0-py2.py3-none-manylinux_2_17_x86_64.whl (2070.0 MB)
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.1/2.1 GB 26.8 MB/s eta 0:00:00
  ERROR: Could not find a version that satisfies the requirement tensorrt_cu12_bindings==10.7.0 (from versions: none)
  ERROR: No matching distribution found for tensorrt_cu12_bindings==10.7.0
  Traceback (most recent call last):
    File "<string>", line 42, in run_pip_command
    File "/usr/lib/python3.13/subprocess.py", line 419, in check_call
      raise CalledProcessError(retcode, cmd)
  subprocess.CalledProcessError: Command '['/tmp/tmpdi1qv29u/.venv/bin/python', '-m', 'pip', 'install', '--extra-index-url', 'https://pypi.nvidia.com', 'tensorrt_cu12_libs==10.7.0', 'tensorrt_cu12_bindings==10.7.0']' returned non-zero exit status 1.
  
  During handling of the above exception, another exception occurred:
  
  Traceback (most recent call last):
    File "/usr/lib/python3.13/site-packages/pyproject_hooks/_in_process/_in_process.py", line 389, in <module>
      main()
      ~~~~^^
    File "/usr/lib/python3.13/site-packages/pyproject_hooks/_in_process/_in_process.py", line 373, in main
      json_out["return_val"] = hook(**hook_input["kwargs"])
                               ~~~~^^^^^^^^^^^^^^^^^^^^^^^^
    File "/usr/lib/python3.13/site-packages/pyproject_hooks/_in_process/_in_process.py", line 280, in build_wheel
      return _build_backend().build_wheel(
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
          wheel_directory, config_settings, metadata_directory
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      )
      ^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/build_meta.py", line 435, in build_wheel
      return _build(['bdist_wheel'])
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/build_meta.py", line 426, in _build
      return self._build_with_temp_dir(
             ~~~~~~~~~~~~~~~~~~~~~~~~~^
          cmd,
          ^^^^
      ...<3 lines>...
          self._arbitrary_args(config_settings),
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      )
      ^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/build_meta.py", line 407, in _build_with_temp_dir
      self.run_setup()
      ~~~~~~~~~~~~~~^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/build_meta.py", line 522, in run_setup
      super().run_setup(setup_script=setup_script)
      ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/build_meta.py", line 320, in run_setup
      exec(code, locals())
      ~~~~^^^^^^^^^^^^^^^^
    File "<string>", line 131, in <module>
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/__init__.py", line 117, in setup
      return distutils.core.setup(**attrs)
             ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/core.py", line 186, in setup
      return run_commands(dist)
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/core.py", line 202, in run_commands
      dist.run_commands()
      ~~~~~~~~~~~~~~~~~^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/dist.py", line 983, in run_commands
      self.run_command(cmd)
      ~~~~~~~~~~~~~~~~^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/dist.py", line 999, in run_command
      super().run_command(command)
      ~~~~~~~~~~~~~~~~~~~^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/dist.py", line 1002, in run_command
      cmd_obj.run()
      ~~~~~~~~~~~^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/command/bdist_wheel.py", line 414, in run
      self.run_command("install")
      ~~~~~~~~~~~~~~~~^^^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/cmd.py", line 339, in run_command
      self.distribution.run_command(command)
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/dist.py", line 999, in run_command
      super().run_command(command)
      ~~~~~~~~~~~~~~~~~~~^^^^^^^^^
    File "/tmp/tmpdi1qv29u/.venv/lib/python3.13/site-packages/setuptools/_distutils/dist.py", line 1002, in run_command
      cmd_obj.run()
      ~~~~~~~~~~~^^
    File "<string>", line 77, in run
    File "<string>", line 58, in run_pip_command
    File "/usr/lib/python3.13/subprocess.py", line 419, in check_call
      raise CalledProcessError(retcode, cmd)
  subprocess.CalledProcessError: Command '['/tmp/tmpdi1qv29u/.venv/bin/pip', 'install', '--extra-index-url', 'https://pypi.nvidia.com', 'tensorrt_cu12_libs==10.7.0', 'tensorrt_cu12_bindings==10.7.0']' returned non-zero exit status 1.
  

  at /usr/lib/python3.13/site-packages/poetry/installation/chef.py:164 in _prepare
      160│ 
      161│                 error = ChefBuildError("\n\n".join(message_parts))
      162│ 
      163│             if error is not None:
    → 164│                 raise error from None
      165│ 
      166│             return path
      167│ 
      168│     def _prepare_sdist(self, archive: Path, destination: Path | None = None) -> Path:

Note: This error originates from the build backend, and is likely not a problem with poetry but with tensorrt-cu12 (10.7.0) not supporting PEP 517 builds. You can verify this by running 'pip wheel --no-cache-dir --use-pep517 "tensorrt-cu12 (==10.7.0)"'.

```



# NEED PYTHON 3.12