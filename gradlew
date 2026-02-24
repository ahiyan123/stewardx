#!/bin/sh

# GitHub Actions optimized Gradle Wrapper
# ----------------------------------------------------------------------------

# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    JAVACMD="$JAVA_HOME/bin/java"
else
    JAVACMD="java"
fi

if [ ! -x "$JAVACMD" ] ; then
    echo "ERROR: JAVA_HOME is set to an invalid directory."
    exit 1
fi

CLASSPATH="gradle/wrapper/gradle-wrapper.jar"

# Execute Gradle without extra quotes around memory settings
exec "$JAVACMD" -Xmx64m -Xms64m -Dorg.gradle.appname=gradlew -classpath "$CLASSPATH" org.gradle.wrapper.GradleWrapperMain "$@"
