module.exports = 
{
	doesntlike: 'linux',
	likes: ['gnu/linux',
		'gnu / linux',
		'gnu+linux',
		'gnu + linux',
		'gnu plus linux',
		'gnu slash linux',
		'gnu&linux',
		'gnu & linux',
		'gnu and linux',
		'gnu n linux',
		'gnu n\' linux',
		'gnu \'n linux',
		'gnu \'n\' linux'],
	copypasta: ['I\'d just like to interject for moment. What you\'re refering to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.\
\
Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.\
\
There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine\'s resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux! Many users do not understand the difference between the kernel, which is Linux, and the whole system, which they also call “Linux”. The ambiguous use of the name doesn\'t help people understand. These users often think that Linus Torvalds developed the whole operating system in 1991, with a bit of help.',
		'Programmers generally know that Linux is a kernel. But since they have generally heard the whole system called “Linux” as well, they often envisage a history that would justify naming the whole system after the kernel. For example, many believe that once Linus Torvalds finished writing Linux, the kernel, its users looked around for other free software to go with it, and found that (for no particular reason) most everything necessary to make a Unix-like system was already available.\
\
What they found was no accident—it was the not-quite-complete GNU system. The available free software added up to a complete system because the GNU Project had been working since 1984 to make one. In the The GNU Manifesto we set forth the goal of developing a free Unix-like system, called GNU. The Initial Announcement of the GNU Project also outlines some of the original plans for the GNU system. By the time Linux was started, GNU was almost finished.\
\
Most free software projects have the goal of developing a particular program for a particular job. For example, Linus Torvalds set out to write a Unix-like kernel (Linux); Donald Knuth set out to write a text formatter (TeX); Bob Scheifler set out to develop a window system (the X Window System). It\'s natural to measure the contribution of this kind of project by specific programs that came from the project.\
\
If we tried to measure the GNU Project\'s contribution in this way, what would we conclude? One CD-ROM vendor found that in their “Linux distribution”, GNU software was the largest single contingent, around 28% of the total source code, and this included some of the essential major components without which there could be no system. Linux itself was about 3%. (The proportions in 2008 are similar: in the “main” repository of gNewSense, Linux is 1.5% and GNU packages are 15%.) So if you were going to pick a name for the system based on who wrote the programs in the system, the most appropriate single choice would be “GNU”.',
		'But that is not the deepest way to consider the question. The GNU Project was not, is not, a project to develop specific software packages. It was not a project to develop a C compiler, although we did that. It was not a project to develop a text editor, although we developed one. The GNU Project set out to develop a complete free Unix-like system: GNU.\
\
Many people have made major contributions to the free software in the system, and they all deserve credit for their software. But the reason it is an integrated system—and not just a collection of useful programs—is because the GNU Project set out to make it one. We made a list of the programs needed to make a complete free system, and we systematically found, wrote, or found people to write everything on the list. We wrote essential but unexciting components because you can\'t have a system without them. Some of our system components, the programming tools, became popular on their own among programmers, but we wrote many components that are not tools. We even developed a chess game, GNU Chess, because a complete system needs games too.\
\
By the early 90s we had put together the whole system aside from the kernel. We had also started a kernel, the GNU Hurd, which runs on top of Mach. Developing this kernel has been a lot harder than we expected; the GNU Hurd started working reliably in 2001, but it is a long way from being ready for people to use in general.\
\
Fortunately, we didn\'t have to wait for the Hurd, because of Linux. Once Torvalds freed Linux in 1992, it fit into the last major gap in the GNU system. People could then combine Linux with the GNU system to make a complete free system: a Linux-based version of the GNU system; the GNU/Linux system, for short.',
		'The GNU Project supports GNU/Linux systems as well as the GNU system. The FSF funded the rewriting of the Linux-related extensions to the GNU C library, so that now they are well integrated, and the newest GNU/Linux systems use the current library release with no changes. The FSF also funded an early stage of the development of Debian GNU/Linux.\
\
Today there are many different variants of the GNU/Linux system (often called “distros”). Most of them include non-free software—their developers follow the philosophy associated with Linux rather than that of GNU. But there are also completely free GNU/Linux distros. The FSF supports computer facilities for two of these distributions, Ututo and gNewSense.\
\
Making a free GNU/Linux distribution is not just a matter of eliminating various non-free programs. Nowadays, the usual version of Linux contains non-free programs too. These programs are intended to be loaded into I/O devices when the system starts, and they are included, as long series of numbers, in the "source code" of Linux. Thus, maintaining free GNU/Linux distributions now entails maintaining a free version of Linux too.\
\
Whether you use GNU/Linux or not, please don\'t confuse the public by using the name “Linux” ambiguously. Linux is the kernel, one of the essential major components of the system. The system as a whole is basically the GNU system, with Linux added. When you\'re talking about this combination, please call it “GNU/Linux”.\
\
If you want to make a link on “GNU/Linux” for further reference, this page and <http://www.gnu.org/gnu/the-gnu-project.html> are good choices. If you mention Linux, the kernel, and want to add a link for further reference, <http://foldoc.doc.ic.ac.uk/foldoc/foldoc.cgi?Linux> is a good URL to use.',
		'Addendum: Aside from GNU, one other project has independently produced a free Unix-like operating system. This system is known as BSD, and it was developed at UC Berkeley. It was non-free in the 80s, but became free in the early 90s. A free operating system that exists today is almost certainly either a variant of the GNU system, or a kind of BSD system.\
\
People sometimes ask whether BSD too is a version of GNU, like GNU/Linux. The BSD developers were inspired to make their code free software by the example of the GNU Project, and explicit appeals from GNU activists helped persuade them, but the code had little overlap with GNU. BSD systems today use some GNU programs, just as the GNU system and its variants use some BSD programs; however, taken as wholes, they are two different systems that evolved separately. The BSD developers did not write a kernel and add it to the GNU system, and a name like GNU/BSD would not fit the situation']
}