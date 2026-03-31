/** Generated from Remote JSON Schema for kubevirt.io.v1.VirtualMachineInstancePreset */

/**
 * Deprecated for removal in v2, please use VirtualMachineInstanceType and VirtualMachinePreference instead.
 *
 * VirtualMachineInstancePreset defines a VMI spec.domain to be applied to all VMIs that match the provided label selector
 * More info: https://kubevirt.io/user-guide/virtual_machines/presets/#overrides
 */
export interface KubevirtIoV1VirtualMachineInstancePreset {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * VirtualMachineInstance Spec contains the VirtualMachineInstance specification.
   */
  spec?: {
    /**
     * Domain is the same object type as contained in VirtualMachineInstanceSpec
     */
    domain?: {
      /**
       * Chassis specifies the chassis info passed to the domain.
       */
      chassis?: {
        asset?: string;
        manufacturer?: string;
        serial?: string;
        sku?: string;
        version?: string;
        [k: string]: unknown;
      };
      /**
       * Clock sets the clock and timers of the vmi.
       */
      clock?: {
        /**
         * Timer specifies whih timers are attached to the vmi.
         */
        timer?: {
          /**
           * HPET (High Precision Event Timer) - multiple timers with periodic interrupts.
           */
          hpet?: {
            /**
             * Enabled set to false makes sure that the machine type or a preset can't add the timer.
             * Defaults to true.
             */
            present?: boolean;
            /**
             * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
             * One of "delay", "catchup", "merge", "discard".
             */
            tickPolicy?: string;
            [k: string]: unknown;
          };
          /**
           * Hyperv (Hypervclock) - lets guests read the host’s wall clock time (paravirtualized). For windows guests.
           */
          hyperv?: {
            /**
             * Enabled set to false makes sure that the machine type or a preset can't add the timer.
             * Defaults to true.
             */
            present?: boolean;
            [k: string]: unknown;
          };
          /**
           * KVM 	(KVM clock) - lets guests read the host’s wall clock time (paravirtualized). For linux guests.
           */
          kvm?: {
            /**
             * Enabled set to false makes sure that the machine type or a preset can't add the timer.
             * Defaults to true.
             */
            present?: boolean;
            [k: string]: unknown;
          };
          /**
           * PIT (Programmable Interval Timer) - a timer with periodic interrupts.
           */
          pit?: {
            /**
             * Enabled set to false makes sure that the machine type or a preset can't add the timer.
             * Defaults to true.
             */
            present?: boolean;
            /**
             * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
             * One of "delay", "catchup", "discard".
             */
            tickPolicy?: string;
            [k: string]: unknown;
          };
          /**
           * RTC (Real Time Clock) - a continuously running timer with periodic interrupts.
           */
          rtc?: {
            /**
             * Enabled set to false makes sure that the machine type or a preset can't add the timer.
             * Defaults to true.
             */
            present?: boolean;
            /**
             * TickPolicy determines what happens when QEMU misses a deadline for injecting a tick to the guest.
             * One of "delay", "catchup".
             */
            tickPolicy?: string;
            /**
             * Track the guest or the wall clock.
             */
            track?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Timezone sets the guest clock to the specified timezone.
         * Zone name follows the TZ environment variable format (e.g. 'America/New_York').
         */
        timezone?: string;
        /**
         * UTC sets the guest clock to UTC on each boot. If an offset is specified,
         * guest changes to the clock will be kept during reboots and are not reset.
         */
        utc?: {
          /**
           * OffsetSeconds specifies an offset in seconds, relative to UTC. If set,
           * guest changes to the clock will be kept during reboots and not reset.
           */
          offsetSeconds?: number;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * CPU allow specified the detailed CPU topology inside the vmi.
       */
      cpu?: {
        /**
         * Cores specifies the number of cores inside the vmi.
         * Must be a value greater or equal 1.
         */
        cores?: number;
        /**
         * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node
         * with enough dedicated pCPUs and pin the vCPUs to it.
         */
        dedicatedCpuPlacement?: boolean;
        /**
         * Features specifies the CPU features list inside the VMI.
         */
        features?: {
          /**
           * Name of the CPU feature
           */
          name: string;
          /**
           * Policy is the CPU feature attribute which can have the following attributes:
           * force    - The virtual CPU will claim the feature is supported regardless of it being supported by host CPU.
           * require  - Guest creation will fail unless the feature is supported by the host CPU or the hypervisor is able to emulate it.
           * optional - The feature will be supported by virtual CPU if and only if it is supported by host CPU.
           * disable  - The feature will not be supported by virtual CPU.
           * forbid   - Guest creation will fail if the feature is supported by host CPU.
           * Defaults to require
           */
          policy?: string;
          [k: string]: unknown;
        }[];
        /**
         * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place
         * the emulator thread on it.
         */
        isolateEmulatorThread?: boolean;
        /**
         * MaxSockets specifies the maximum amount of sockets that can
         * be hotplugged
         */
        maxSockets?: number;
        /**
         * Model specifies the CPU model inside the VMI.
         * List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map.
         * It is possible to specify special cases like "host-passthrough" to get the same CPU as the node
         * and "host-model" to get CPU closest to the node one.
         * Defaults to host-model.
         */
        model?: string;
        /**
         * NUMA allows specifying settings for the guest NUMA topology
         */
        numa?: {
          /**
           * GuestMappingPassthrough will create an efficient guest topology based on host CPUs exclusively assigned to a pod.
           * The created topology ensures that memory and CPUs on the virtual numa nodes never cross boundaries of host numa nodes.
           */
          guestMappingPassthrough?: {
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Realtime instructs the virt-launcher to tune the VMI for lower latency, optional for real time workloads
         */
        realtime?: {
          /**
           * Mask defines the vcpu mask expression that defines which vcpus are used for realtime. Format matches libvirt's expressions.
           * Example: "0-3,^1","0,2,3","2-3"
           */
          mask?: string;
          [k: string]: unknown;
        };
        /**
         * Sockets specifies the number of sockets inside the vmi.
         * Must be a value greater or equal 1.
         */
        sockets?: number;
        /**
         * Threads specifies the number of threads inside the vmi.
         * Must be a value greater or equal 1.
         */
        threads?: number;
        [k: string]: unknown;
      };
      /**
       * Devices allows adding disks, network interfaces, and others
       */
      devices: {
        /**
         * Whether to attach the default graphics device or not.
         * VNC will not be available if set to false. Defaults to true.
         */
        autoattachGraphicsDevice?: boolean;
        /**
         * Whether to attach an Input Device.
         * Defaults to false.
         */
        autoattachInputDevice?: boolean;
        /**
         * Whether to attach the Memory balloon device with default period.
         * Period can be adjusted in virt-config.
         * Defaults to true.
         */
        autoattachMemBalloon?: boolean;
        /**
         * Whether to attach a pod network interface. Defaults to true.
         */
        autoattachPodInterface?: boolean;
        /**
         * Whether to attach the default virtio-serial console or not.
         * Serial console access will not be available if set to false. Defaults to true.
         */
        autoattachSerialConsole?: boolean;
        /**
         * Whether to attach the VSOCK CID to the VM or not.
         * VSOCK access will be available if set to true. Defaults to false.
         */
        autoattachVSOCK?: boolean;
        /**
         * Whether or not to enable virtio multi-queue for block devices.
         * Defaults to false.
         */
        blockMultiQueue?: boolean;
        /**
         * To configure and access client devices such as redirecting USB
         */
        clientPassthrough?: {
          [k: string]: unknown;
        };
        /**
         * DisableHotplug disabled the ability to hotplug disks.
         */
        disableHotplug?: boolean;
        /**
         * Disks describes disks, cdroms and luns which are connected to the vmi.
         *
         * @maxItems 256
         */
        disks?: {
          /**
           * If specified, the virtual disk will be presented with the given block sizes.
           */
          blockSize?: {
            /**
             * CustomBlockSize represents the desired logical and physical block size for a VM disk.
             */
            custom?: {
              discardGranularity?: number;
              logical?: number;
              physical?: number;
              [k: string]: unknown;
            };
            /**
             * Represents if a feature is enabled or disabled.
             */
            matchVolume?: {
              /**
               * Enabled determines if the feature should be enabled or disabled on the guest.
               * Defaults to true.
               */
              enabled?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          /**
           * BootOrder is an integer value > 0, used to determine ordering of boot devices.
           * Lower values take precedence.
           * Each disk or interface that has a boot order must have a unique value.
           * Disks without a boot order are not tried if a disk with a boot order exists.
           */
          bootOrder?: number;
          /**
           * Cache specifies which kvm disk cache mode should be used.
           * Supported values are:
           * none: Guest I/O not cached on the host, but may be kept in a disk cache.
           * writethrough: Guest I/O cached on the host but written through to the physical medium. Slowest but with most guarantees.
           * writeback: Guest I/O cached on the host.
           * Defaults to none if the storage supports O_DIRECT, otherwise writethrough.
           */
          cache?: string;
          /**
           * Attach a volume as a cdrom to the vmi.
           */
          cdrom?: {
            /**
             * Bus indicates the type of disk device to emulate.
             * supported values: virtio, sata, scsi.
             */
            bus?: string;
            /**
             * ReadOnly.
             * Defaults to true.
             */
            readonly?: boolean;
            /**
             * Tray indicates if the tray of the device is open or closed.
             * Allowed values are "open" and "closed".
             * Defaults to closed.
             */
            tray?: string;
            [k: string]: unknown;
          };
          /**
           * ChangedBlockTracking indicates this disk should have CBT option
           * Defaults to false.
           */
          changedBlockTracking?: boolean;
          /**
           * dedicatedIOThread indicates this disk should have an exclusive IO Thread.
           * Enabling this implies useIOThreads = true.
           * Defaults to false.
           */
          dedicatedIOThread?: boolean;
          /**
           * Attach a volume as a disk to the vmi.
           */
          disk?: {
            /**
             * Bus indicates the type of disk device to emulate.
             * supported values: virtio, sata, scsi, usb.
             */
            bus?: string;
            /**
             * If specified, the virtual disk will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
             */
            pciAddress?: string;
            /**
             * ReadOnly.
             * Defaults to false.
             */
            readonly?: boolean;
            [k: string]: unknown;
          };
          /**
           * If specified, it can change the default error policy (stop) for the disk
           */
          errorPolicy?: string;
          /**
           * IO specifies which QEMU disk IO mode should be used.
           * Supported values are: native, default, threads.
           */
          io?: string;
          /**
           * Attach a volume as a LUN to the vmi.
           */
          lun?: {
            /**
             * Bus indicates the type of disk device to emulate.
             * supported values: virtio, sata, scsi.
             */
            bus?: string;
            /**
             * ReadOnly.
             * Defaults to false.
             */
            readonly?: boolean;
            /**
             * Reservation indicates if the disk needs to support the persistent reservation for the SCSI disk
             */
            reservation?: boolean;
            [k: string]: unknown;
          };
          /**
           * Name is the device name
           */
          name: string;
          /**
           * Serial provides the ability to specify a serial number for the disk device.
           */
          serial?: string;
          /**
           * If specified the disk is made sharable and multiple write from different VMs are permitted
           */
          shareable?: boolean;
          /**
           * If specified, disk address and its tag will be provided to the guest via config drive metadata
           */
          tag?: string;
          [k: string]: unknown;
        }[];
        /**
         * DownwardMetrics creates a virtio serials for exposing the downward metrics to the vmi.
         */
        downwardMetrics?: {
          [k: string]: unknown;
        };
        /**
         * Filesystems describes filesystem which is connected to the vmi.
         */
        filesystems?: {
          /**
           * Name is the device name
           */
          name: string;
          /**
           * Virtiofs is supported
           */
          virtiofs: {
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        /**
         * Whether to attach a GPU device to the vmi.
         */
        gpus?: {
          /**
           * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
           * device is allocated
           */
          claimName?: string;
          /**
           * DeviceName is the name of the device provisioned by device-plugins
           */
          deviceName?: string;
          /**
           * Name of the GPU device as exposed by a device plugin
           */
          name: string;
          /**
           * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
           * device is requested
           */
          requestName?: string;
          /**
           * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
           */
          tag?: string;
          virtualGPUOptions?: {
            display?: {
              /**
               * Enabled determines if a display addapter backed by a vGPU should be enabled or disabled on the guest.
               * Defaults to true.
               */
              enabled?: boolean;
              /**
               * Enables a boot framebuffer, until the guest OS loads a real GPU driver
               * Defaults to true.
               */
              ramFB?: {
                /**
                 * Enabled determines if the feature should be enabled or disabled on the guest.
                 * Defaults to true.
                 */
                enabled?: boolean;
                [k: string]: unknown;
              };
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        /**
         * Whether to attach a host device to the vmi.
         */
        hostDevices?: {
          /**
           * ClaimName needs to be provided from the list vmi.spec.resourceClaims[].name where this
           * device is allocated
           */
          claimName?: string;
          /**
           * DeviceName is the name of the device provisioned by device-plugins
           */
          deviceName?: string;
          name: string;
          /**
           * RequestName needs to be provided from resourceClaim.spec.devices.requests[].name where this
           * device is requested
           */
          requestName?: string;
          /**
           * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
           */
          tag?: string;
          [k: string]: unknown;
        }[];
        /**
         * Inputs describe input devices
         */
        inputs?: {
          /**
           * Bus indicates the bus of input device to emulate.
           * Supported values: virtio, usb.
           */
          bus?: string;
          /**
           * Name is the device name
           */
          name: string;
          /**
           * Type indicated the type of input device.
           * Supported values: tablet.
           */
          type: string;
          [k: string]: unknown;
        }[];
        /**
         * Interfaces describe network interfaces which are added to the vmi.
         *
         * @maxItems 256
         */
        interfaces?: {
          /**
           * If specified, the ACPI index is used to provide network interface device naming, that is stable across changes
           * in PCI addresses assigned to the device.
           * This value is required to be unique across all devices and be between 1 and (16*1024-1).
           */
          acpiIndex?: number;
          /**
           * Binding specifies the binding plugin that will be used to connect the interface to the guest.
           * It provides an alternative to InterfaceBindingMethod.
           * version: 1alphav1
           */
          binding?: {
            /**
             * Name references to the binding name as denined in the kubevirt CR.
             * version: 1alphav1
             */
            name: string;
            [k: string]: unknown;
          };
          /**
           * BootOrder is an integer value > 0, used to determine ordering of boot devices.
           * Lower values take precedence.
           * Each interface or disk that has a boot order must have a unique value.
           * Interfaces without a boot order are not tried.
           */
          bootOrder?: number;
          /**
           * InterfaceBridge connects to a given network via a linux bridge.
           */
          bridge?: {
            [k: string]: unknown;
          };
          /**
           * If specified the network interface will pass additional DHCP options to the VMI
           */
          dhcpOptions?: {
            /**
             * If specified will pass option 67 to interface's DHCP server
             */
            bootFileName?: string;
            /**
             * If specified will pass the configured NTP server to the VM via DHCP option 042.
             */
            ntpServers?: string[];
            /**
             * If specified will pass extra DHCP options for private use, range: 224-254
             */
            privateOptions?: {
              /**
               * Option is an Integer value from 224-254
               * Required.
               */
              option: number;
              /**
               * Value is a String value for the Option provided
               * Required.
               */
              value: string;
              [k: string]: unknown;
            }[];
            /**
             * If specified will pass option 66 to interface's DHCP server
             */
            tftpServerName?: string;
            [k: string]: unknown;
          };
          /**
           * Interface MAC address. For example: de:ad:00:00:be:af or DE-AD-00-00-BE-AF.
           */
          macAddress?: string;
          /**
           * DeprecatedMacvtap is an alias to the deprecated Macvtap interface,
           * please refer to Kubevirt user guide for alternatives.
           * Deprecated: Removed in v1.3
           */
          macvtap?: {
            [k: string]: unknown;
          };
          /**
           * InterfaceMasquerade connects to a given network using netfilter rules to nat the traffic.
           */
          masquerade?: {
            [k: string]: unknown;
          };
          /**
           * Interface model.
           * One of: e1000, e1000e, igb, ne2k_pci, pcnet, rtl8139, virtio.
           * Defaults to virtio.
           */
          model?: string;
          /**
           * Logical name of the interface as well as a reference to the associated networks.
           * Must match the Name of a Network.
           */
          name: string;
          /**
           * DeprecatedPasst is an alias to the deprecated Passt interface,
           * please refer to Kubevirt user guide for alternatives.
           * Deprecated: Removed in v1.3
           */
          passt?: {
            [k: string]: unknown;
          };
          /**
           * InterfacePasstBinding connects to a given network using passt usermode networking.
           */
          passtBinding?: {
            [k: string]: unknown;
          };
          /**
           * If specified, the virtual network interface will be placed on the guests pci address with the specified PCI address. For example: 0000:81:01.10
           */
          pciAddress?: string;
          /**
           * List of ports to be forwarded to the virtual machine.
           */
          ports?: {
            /**
             * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
             * named port in a pod must have a unique name. Name for the port that can be
             * referred to by services.
             */
            name?: string;
            /**
             * Number of port to expose for the virtual machine.
             * This must be a valid port number, 0 < x < 65536.
             */
            port: number;
            /**
             * Protocol for port. Must be UDP or TCP.
             * Defaults to "TCP".
             */
            protocol?: string;
            [k: string]: unknown;
          }[];
          /**
           * DeprecatedSlirp is an alias to the deprecated Slirp interface
           * Deprecated: Removed in v1.3
           */
          slirp?: {
            [k: string]: unknown;
          };
          /**
           * InterfaceSRIOV connects to a given network by passing-through an SR-IOV PCI device via vfio.
           */
          sriov?: {
            [k: string]: unknown;
          };
          /**
           * State represents the requested operational state of the interface.
           * The supported values are:
           * 'absent', expressing a request to remove the interface.
           * 'down', expressing a request to set the link down.
           * 'up', expressing a request to set the link up.
           * Empty value functions as 'up'.
           */
          state?: string;
          /**
           * If specified, the virtual network interface address and its tag will be provided to the guest via config drive
           */
          tag?: string;
          [k: string]: unknown;
        }[];
        /**
         * Whether to log the auto-attached default serial console or not.
         * Serial console logs will be collect to a file and then streamed from a named 'guest-console-log'.
         * Not relevant if autoattachSerialConsole is disabled.
         * Defaults to cluster wide setting on VirtualMachineOptions.
         */
        logSerialConsole?: boolean;
        /**
         * If specified, virtual network interfaces configured with a virtio bus will also enable the vhost multiqueue feature for network devices. The number of queues created depends on additional factors of the VirtualMachineInstance, like the number of guest CPUs.
         */
        networkInterfaceMultiqueue?: boolean;
        /**
         * PanicDevices provides additional crash information when a guest crashes.
         */
        panicDevices?: {
          /**
           * Model specifies what type of panic device is provided.
           * The panic model used when this attribute is missing depends on the hypervisor and guest arch.
           * One of: isa, hyperv, pvpanic.
           */
          model?: string;
          [k: string]: unknown;
        }[];
        /**
         * Whether to have random number generator from host
         */
        rng?: {
          [k: string]: unknown;
        };
        /**
         * Whether to emulate a sound device.
         */
        sound?: {
          /**
           * We only support ich9 or ac97.
           * If SoundDevice is not set: No sound card is emulated.
           * If SoundDevice is set but Model is not: ich9
           */
          model?: string;
          /**
           * User's defined name for this sound device
           */
          name: string;
          [k: string]: unknown;
        };
        /**
         * Whether to emulate a TPM device.
         */
        tpm?: {
          /**
           * Enabled allows a user to explicitly disable the vTPM even when one is enabled by a preference referenced by the VirtualMachine
           * Defaults to True
           */
          enabled?: boolean;
          /**
           * Persistent indicates the state of the TPM device should be kept accross reboots
           * Defaults to false
           */
          persistent?: boolean;
          [k: string]: unknown;
        };
        /**
         * Fall back to legacy virtio 0.9 support if virtio bus is selected on devices.
         * This is helpful for old machines like CentOS6 or RHEL6 which
         * do not understand virtio_non_transitional (virtio 1.0).
         */
        useVirtioTransitional?: boolean;
        /**
         * Video describes the video device configuration for the vmi.
         */
        video?: {
          /**
           * Type specifies the video device type (e.g., virtio, vga, bochs, ramfb).
           * If not specified, the default is architecture-dependent (VGA for BIOS-based VMs, Bochs for EFI-based VMs on AMD64; virtio for Arm and s390x).
           */
          type?: string;
          [k: string]: unknown;
        };
        /**
         * Watchdog describes a watchdog device which can be added to the vmi.
         */
        watchdog?: {
          /**
           * diag288 watchdog device (specific to s390x architecture).
           */
          diag288?: {
            /**
             * The action to take. Valid values are poweroff, reset, shutdown.
             * Defaults to reset.
             */
            action?: string;
            [k: string]: unknown;
          };
          /**
           * i6300esb watchdog device.
           */
          i6300esb?: {
            /**
             * The action to take. Valid values are poweroff, reset, shutdown.
             * Defaults to reset.
             */
            action?: string;
            [k: string]: unknown;
          };
          /**
           * Name of the watchdog.
           */
          name: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Features like acpi, apic, hyperv, smm.
       */
      features?: {
        /**
         * ACPI enables/disables ACPI inside the guest.
         * Defaults to enabled.
         */
        acpi?: {
          /**
           * Enabled determines if the feature should be enabled or disabled on the guest.
           * Defaults to true.
           */
          enabled?: boolean;
          [k: string]: unknown;
        };
        /**
         * Defaults to the machine type setting.
         */
        apic?: {
          /**
           * Enabled determines if the feature should be enabled or disabled on the guest.
           * Defaults to true.
           */
          enabled?: boolean;
          /**
           * EndOfInterrupt enables the end of interrupt notification in the guest.
           * Defaults to false.
           */
          endOfInterrupt?: boolean;
          [k: string]: unknown;
        };
        /**
         * Defaults to the machine type setting.
         */
        hyperv?: {
          /**
           * EVMCS Speeds up L2 vmexits, but disables other virtualization features. Requires vapic.
           * Defaults to the machine type setting.
           */
          evmcs?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Frequencies improves the TSC clock source handling for Hyper-V on KVM.
           * Defaults to the machine type setting.
           */
          frequencies?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * IPI improves performances in overcommited environments. Requires vpindex.
           * Defaults to the machine type setting.
           */
          ipi?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Reenlightenment enables the notifications on TSC frequency changes.
           * Defaults to the machine type setting.
           */
          reenlightenment?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Relaxed instructs the guest OS to disable watchdog timeouts.
           * Defaults to the machine type setting.
           */
          relaxed?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Reset enables Hyperv reboot/reset for the vmi. Requires synic.
           * Defaults to the machine type setting.
           */
          reset?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Runtime improves the time accounting to improve scheduling in the guest.
           * Defaults to the machine type setting.
           */
          runtime?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * Spinlocks allows to configure the spinlock retry attempts.
           */
          spinlocks?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            /**
             * Retries indicates the number of retries.
             * Must be a value greater or equal 4096.
             * Defaults to 4096.
             */
            spinlocks?: number;
            [k: string]: unknown;
          };
          /**
           * SyNIC enables the Synthetic Interrupt Controller.
           * Defaults to the machine type setting.
           */
          synic?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * SyNICTimer enables Synthetic Interrupt Controller Timers, reducing CPU load.
           * Defaults to the machine type setting.
           */
          synictimer?: {
            /**
             * Represents if a feature is enabled or disabled.
             */
            direct?: {
              /**
               * Enabled determines if the feature should be enabled or disabled on the guest.
               * Defaults to true.
               */
              enabled?: boolean;
              [k: string]: unknown;
            };
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * TLBFlush improves performances in overcommited environments. Requires vpindex.
           * Defaults to the machine type setting.
           */
          tlbflush?: {
            /**
             * Direct allows sending the TLB flush command directly to the hypervisor.
             * It can be useful to optimize performance in nested virtualization cases, such as Windows VBS.
             */
            direct?: {
              /**
               * Enabled determines if the feature should be enabled or disabled on the guest.
               * Defaults to true.
               */
              enabled?: boolean;
              [k: string]: unknown;
            };
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            /**
             * Extended allows the guest to execute partial TLB flushes. It can be helpful for general purpose workloads.
             */
            extended?: {
              /**
               * Enabled determines if the feature should be enabled or disabled on the guest.
               * Defaults to true.
               */
              enabled?: boolean;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          /**
           * VAPIC improves the paravirtualized handling of interrupts.
           * Defaults to the machine type setting.
           */
          vapic?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          /**
           * VendorID allows setting the hypervisor vendor id.
           * Defaults to the machine type setting.
           */
          vendorid?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            /**
             * VendorID sets the hypervisor vendor id, visible to the vmi.
             * String up to twelve characters.
             */
            vendorid?: string;
            [k: string]: unknown;
          };
          /**
           * VPIndex enables the Virtual Processor Index to help windows identifying virtual processors.
           * Defaults to the machine type setting.
           */
          vpindex?: {
            /**
             * Enabled determines if the feature should be enabled or disabled on the guest.
             * Defaults to true.
             */
            enabled?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * This enables all supported hyperv flags automatically.
         * Bear in mind that if this enabled hyperV features cannot
         * be enabled explicitly. In addition, a Virtual Machine
         * using it will be non-migratable.
         */
        hypervPassthrough?: {
          enabled?: boolean;
          [k: string]: unknown;
        };
        /**
         * Configure how KVM presence is exposed to the guest.
         */
        kvm?: {
          /**
           * Hide the KVM hypervisor from standard MSR based discovery.
           * Defaults to false
           */
          hidden?: boolean;
          [k: string]: unknown;
        };
        /**
         * Notify the guest that the host supports paravirtual spinlocks.
         * For older kernels this feature should be explicitly disabled.
         */
        pvspinlock?: {
          /**
           * Enabled determines if the feature should be enabled or disabled on the guest.
           * Defaults to true.
           */
          enabled?: boolean;
          [k: string]: unknown;
        };
        /**
         * SMM enables/disables System Management Mode.
         * TSEG not yet implemented.
         */
        smm?: {
          /**
           * Enabled determines if the feature should be enabled or disabled on the guest.
           * Defaults to true.
           */
          enabled?: boolean;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Firmware.
       */
      firmware?: {
        /**
         * Information that can be set in the ACPI table
         */
        acpi?: {
          /**
           * Similar to SlicNameRef, another ACPI entry that is used in more recent Windows versions.
           * The above points to the spec of MSDM too.
           */
          msdmNameRef?: string;
          /**
           * SlicNameRef should match the volume name of a secret object. The data in the secret should
           * be a binary blob that follows the ACPI SLIC standard, see:
           * https://learn.microsoft.com/en-us/previous-versions/windows/hardware/design/dn653305(v=vs.85)
           */
          slicNameRef?: string;
          [k: string]: unknown;
        };
        /**
         * Settings to control the bootloader that is used.
         */
        bootloader?: {
          /**
           * If set (default), BIOS will be used.
           */
          bios?: {
            /**
             * If set, the BIOS output will be transmitted over serial
             */
            useSerial?: boolean;
            [k: string]: unknown;
          };
          /**
           * If set, EFI will be used instead of BIOS.
           */
          efi?: {
            /**
             * If set to true, Persistent will persist the EFI NVRAM across reboots.
             * Defaults to false
             */
            persistent?: boolean;
            /**
             * If set, SecureBoot will be enabled and the OVMF roms will be swapped for
             * SecureBoot-enabled ones.
             * Requires SMM to be enabled.
             * Defaults to true
             */
            secureBoot?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * Settings to set the kernel for booting.
         */
        kernelBoot?: {
          /**
           * Container defines the container that containes kernel artifacts
           */
          container?: {
            /**
             * Image that contains initrd / kernel files.
             */
            image: string;
            /**
             * Image pull policy.
             * One of Always, Never, IfNotPresent.
             * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
             * Cannot be updated.
             * More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
             */
            imagePullPolicy?: string;
            /**
             * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
             */
            imagePullSecret?: string;
            /**
             * the fully-qualified path to the ramdisk image in the host OS
             */
            initrdPath?: string;
            /**
             * The fully-qualified path to the kernel image in the host OS
             */
            kernelPath?: string;
            [k: string]: unknown;
          };
          /**
           * Arguments to be passed to the kernel at boot time
           */
          kernelArgs?: string;
          [k: string]: unknown;
        };
        /**
         * The system-serial-number in SMBIOS
         */
        serial?: string;
        /**
         * UUID reported by the vmi bios.
         * Defaults to a random generated uid.
         */
        uuid?: string;
        [k: string]: unknown;
      };
      /**
       * IOThreads specifies the IOThreads options.
       */
      ioThreads?: {
        /**
         * SupplementalPoolThreadCount specifies how many iothreads are allocated for the supplementalPool policy.
         */
        supplementalPoolThreadCount?: number;
        [k: string]: unknown;
      };
      /**
       * Controls whether or not disks will share IOThreads.
       * Omitting IOThreadsPolicy disables use of IOThreads.
       * One of: shared, auto, supplementalPool
       */
      ioThreadsPolicy?: string;
      /**
       * Launch Security setting of the vmi.
       */
      launchSecurity?: {
        /**
         * AMD Secure Encrypted Virtualization (SEV).
         */
        sev?: {
          /**
           * If specified, run the attestation process for a vmi.
           */
          attestation?: {
            [k: string]: unknown;
          };
          /**
           * Base64 encoded guest owner's Diffie-Hellman key.
           */
          dhCert?: string;
          /**
           * Guest policy flags as defined in AMD SEV API specification.
           * Note: due to security reasons it is not allowed to enable guest debugging. Therefore NoDebug flag is not exposed to users and is always true.
           */
          policy?: {
            /**
             * SEV-ES is required.
             * Defaults to false.
             */
            encryptedState?: boolean;
            [k: string]: unknown;
          };
          /**
           * Base64 encoded session blob.
           */
          session?: string;
          [k: string]: unknown;
        };
        /**
         * AMD SEV-SNP flags defined by the SEV-SNP specifications.
         */
        snp?: {
          [k: string]: unknown;
        };
        /**
         * Intel Trust Domain Extensions (TDX).
         */
        tdx?: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * Machine type.
       */
      machine?: {
        /**
         * QEMU machine type is the actual chipset of the VirtualMachineInstance.
         */
        type?: string;
        [k: string]: unknown;
      };
      /**
       * Memory allow specifying the VMI memory features.
       */
      memory?: {
        /**
         * Guest allows to specifying the amount of memory which is visible inside the Guest OS.
         * The Guest must lie between Requests and Limits from the resources section.
         * Defaults to the requested memory in the resources section if not specified.
         */
        guest?: number | string;
        /**
         * Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory.
         */
        hugepages?: {
          /**
           * PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi.
           */
          pageSize?: string;
          [k: string]: unknown;
        };
        /**
         * MaxGuest allows to specify the maximum amount of memory which is visible inside the Guest OS.
         * The delta between MaxGuest and Guest is the amount of memory that can be hot(un)plugged.
         */
        maxGuest?: number | string;
        /**
         * ReservedOverhead configures the memory overhead applied to a VM
         * and its characteristics.
         */
        reservedOverhead?: {
          /**
           * AddedOverhead determines the memory overhead that will be reserved
           * for the VM. It increases the virt-launcher pod memory limit.
           */
          addedOverhead?: number | string;
          /**
           * RequiresLock determines whether the VM's and its overhead memory
           * need to be locked or not. It is a common practice to enable this
           * if vDPA, VFIO or any other specialized hardware that depends on
           * DMA is being used by the VM.
           * False - (Default) memory lock RLimits are not modified.
           * True - Memory lock RLimits will be updated to consider VM memory
           *        size and memory overhead
           */
          memLock?: 'NotRequired' | 'Required';
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * RebootPolicy specifies how the guest should behave on reboot.
       * Reboot (default): The guest is allowed to reboot silently.
       * Terminate: The VMI will be terminated on guest reboot, allowing
       * higher level controllers (such as the VM controller) to recreate
       * the VMI with any updated configuration such as boot order changes.
       */
      rebootPolicy?: 'Reboot' | 'Terminate';
      /**
       * Resources describes the Compute Resources required by this vmi.
       */
      resources?: {
        /**
         * Limits describes the maximum amount of compute resources allowed.
         * Valid resource keys are "memory" and "cpu".
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Don't ask the scheduler to take the guest-management overhead into account. Instead
         * put the overhead only into the container's memory limit. This can lead to crashes if
         * all memory is in use on a node. Defaults to false.
         */
        overcommitGuestOverhead?: boolean;
        /**
         * Requests is a description of the initial vmi resources.
         * Valid resource keys are "memory" and "cpu".
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Selector is a label query over a set of VMIs.
     * Required.
     */
    selector: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      matchExpressions?: {
        /**
         * key is the label key that the selector applies to.
         */
        key: string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        operator: string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        values?: string[];
        [k: string]: unknown;
      }[];
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      matchLabels?: {
        [k: string]: string;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
