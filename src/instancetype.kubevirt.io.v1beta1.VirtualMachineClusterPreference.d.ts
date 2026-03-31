/** Generated from Remote JSON Schema for instancetype.kubevirt.io.v1beta1.VirtualMachineClusterPreference */

/**
 * VirtualMachineClusterPreference is a cluster scoped version of the VirtualMachinePreference resource.
 */
export interface InstancetypeKubevirtIoV1Beta1VirtualMachineClusterPreference {
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
   * Required spec describing the preferences
   */
  spec: {
    /**
     * Optionally defines preferred Annotations to be applied to the VirtualMachineInstance
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Clock optionally defines preferences associated with the Clock attribute of a VirtualMachineInstance DomainSpec
     */
    clock?: {
      /**
       * ClockOffset allows specifying the UTC offset or the timezone of the guest clock.
       */
      preferredClockOffset?: {
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
       * Timer specifies whih timers are attached to the vmi.
       */
      preferredTimer?: {
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
      [k: string]: unknown;
    };
    /**
     * CPU optionally defines preferences associated with the CPU attribute of a VirtualMachineInstance DomainSpec
     */
    cpu?: {
      /**
       * PreferredCPUFeatures optionally defines a slice of preferred CPU features.
       */
      preferredCPUFeatures?: {
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
       * PreferredCPUTopology optionally defines the preferred guest visible CPU topology, defaults to PreferSockets.
       */
      preferredCPUTopology?: string;
      spreadOptions?: {
        /**
         * Across optionally defines how to spread vCPUs across the guest visible topology.
         * Default: SocketsCores
         */
        across?: string;
        /**
         * Ratio optionally defines the ratio to spread vCPUs across the guest visible topology:
         *
         * CoresThreads        - 1:2   - Controls the ratio of cores to threads. Only a ratio of 2 is currently accepted.
         * SocketsCores        - 1:N   - Controls the ratio of socket to cores.
         * SocketsCoresThreads - 1:N:2 - Controls the ratio of socket to cores. Each core providing 2 threads.
         *
         * Default: 2
         */
        ratio?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Devices optionally defines preferences associated with the Devices attribute of a VirtualMachineInstance DomainSpec
     */
    devices?: {
      /**
       * PreferredAutoattachGraphicsDevice optionally defines the preferred value of AutoattachGraphicsDevice
       */
      preferredAutoattachGraphicsDevice?: boolean;
      /**
       * PreferredAutoattachInputDevice optionally defines the preferred value of AutoattachInputDevice
       */
      preferredAutoattachInputDevice?: boolean;
      /**
       * PreferredAutoattachMemBalloon optionally defines the preferred value of AutoattachMemBalloon
       */
      preferredAutoattachMemBalloon?: boolean;
      /**
       * PreferredAutoattachPodInterface optionally defines the preferred value of AutoattachPodInterface
       */
      preferredAutoattachPodInterface?: boolean;
      /**
       * PreferredAutoattachSerialConsole optionally defines the preferred value of AutoattachSerialConsole
       */
      preferredAutoattachSerialConsole?: boolean;
      /**
       * PreferredBlockMultiQueue optionally enables the vhost multiqueue feature for virtio disks.
       */
      preferredBlockMultiQueue?: boolean;
      /**
       * PreferredCdromBus optionally defines the preferred bus for Cdrom Disk devices.
       */
      preferredCdromBus?: string;
      /**
       * PreferredDisableHotplug optionally defines the preferred value of DisableHotplug
       */
      preferredDisableHotplug?: boolean;
      /**
       * PreferredBlockSize optionally defines the block size of Disk devices.
       */
      preferredDiskBlockSize?: {
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
       * PreferredDiskBus optionally defines the preferred bus for Disk Disk devices.
       */
      preferredDiskBus?: string;
      /**
       * PreferredCache optionally defines the DriverCache to be used by Disk devices.
       */
      preferredDiskCache?: string;
      /**
       * PreferredDedicatedIoThread optionally enables dedicated IO threads for Disk devices using the virtio bus.
       */
      preferredDiskDedicatedIoThread?: boolean;
      /**
       * PreferredIo optionally defines the QEMU disk IO mode to be used by Disk devices.
       */
      preferredDiskIO?: string;
      /**
       * PreferredInputBus optionally defines the preferred bus for Input devices.
       */
      preferredInputBus?: string;
      /**
       * PreferredInputType optionally defines the preferred type for Input devices.
       */
      preferredInputType?: string;
      /**
       * PreferredInterfaceMasquerade optionally defines the preferred masquerade configuration to use with each network interface.
       */
      preferredInterfaceMasquerade?: {
        [k: string]: unknown;
      };
      /**
       * PreferredInterfaceModel optionally defines the preferred model to be used by Interface devices.
       */
      preferredInterfaceModel?: string;
      /**
       * PreferredLunBus optionally defines the preferred bus for Lun Disk devices.
       */
      preferredLunBus?: string;
      /**
       * PreferredNetworkInterfaceMultiQueue optionally enables the vhost multiqueue feature for virtio interfaces.
       */
      preferredNetworkInterfaceMultiQueue?: boolean;
      /**
       * PreferredPanicDeviceModel optionally defines the preferred panic device model to use with panic devices.
       */
      preferredPanicDeviceModel?: string;
      /**
       * PreferredRng optionally defines the preferred rng device to be used.
       */
      preferredRng?: {
        [k: string]: unknown;
      };
      /**
       * PreferredSoundModel optionally defines the preferred model for Sound devices.
       */
      preferredSoundModel?: string;
      /**
       * PreferredTPM optionally defines the preferred TPM device to be used.
       */
      preferredTPM?: {
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
       * PreferredUseVirtioTransitional optionally defines the preferred value of UseVirtioTransitional
       */
      preferredUseVirtioTransitional?: boolean;
      /**
       * PreferredVirtualGPUOptions optionally defines the preferred value of VirtualGPUOptions
       */
      preferredVirtualGPUOptions?: {
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
    };
    /**
     * Features optionally defines preferences associated with the Features attribute of a VirtualMachineInstance DomainSpec
     */
    features?: {
      /**
       * PreferredAcpi optionally enables the ACPI feature
       */
      preferredAcpi?: {
        /**
         * Enabled determines if the feature should be enabled or disabled on the guest.
         * Defaults to true.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * PreferredApic optionally enables and configures the APIC feature
       */
      preferredApic?: {
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
       * PreferredHyperv optionally enables and configures HyperV features
       */
      preferredHyperv?: {
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
       * PreferredKvm optionally enables and configures KVM features
       */
      preferredKvm?: {
        /**
         * Hide the KVM hypervisor from standard MSR based discovery.
         * Defaults to false
         */
        hidden?: boolean;
        [k: string]: unknown;
      };
      /**
       * PreferredPvspinlock optionally enables the Pvspinlock feature
       */
      preferredPvspinlock?: {
        /**
         * Enabled determines if the feature should be enabled or disabled on the guest.
         * Defaults to true.
         */
        enabled?: boolean;
        [k: string]: unknown;
      };
      /**
       * PreferredSmm optionally enables the SMM feature
       */
      preferredSmm?: {
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
     * Firmware optionally defines preferences associated with the Firmware attribute of a VirtualMachineInstance DomainSpec
     */
    firmware?: {
      /**
       * PreferredEfi optionally enables EFI
       */
      preferredEfi?: {
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
      /**
       * PreferredUseBios optionally enables BIOS
       */
      preferredUseBios?: boolean;
      /**
       * PreferredUseBiosSerial optionally transmitts BIOS output over the serial.
       *
       * Requires PreferredUseBios to be enabled.
       */
      preferredUseBiosSerial?: boolean;
      /**
       * PreferredUseEfi optionally enables EFI
       *
       * Deprecated: Will be removed with v1beta2 or v1
       */
      preferredUseEfi?: boolean;
      /**
       * PreferredUseSecureBoot optionally enables SecureBoot and the OVMF roms will be swapped for SecureBoot-enabled ones.
       *
       * Requires PreferredUseEfi and PreferredSmm to be enabled.
       *
       * Deprecated: Will be removed with v1beta2 or v1
       */
      preferredUseSecureBoot?: boolean;
      [k: string]: unknown;
    };
    /**
     * Machine optionally defines preferences associated with the Machine attribute of a VirtualMachineInstance DomainSpec
     */
    machine?: {
      /**
       * PreferredMachineType optionally defines the preferred machine type to use.
       */
      preferredMachineType?: string;
      [k: string]: unknown;
    };
    /**
     * PreferSpreadSocketToCoreRatio defines the ratio to spread vCPUs between cores and sockets, it defaults to 2.
     */
    preferSpreadSocketToCoreRatio?: number;
    /**
     * PreferredArchitecture defines a prefeerred architecture for the VirtualMachine
     */
    preferredArchitecture?: string;
    /**
     * Subdomain of the VirtualMachineInstance
     */
    preferredSubdomain?: string;
    /**
     * Grace period observed after signalling a VirtualMachineInstance to stop after which the VirtualMachineInstance is force terminated.
     */
    preferredTerminationGracePeriodSeconds?: number;
    /**
     * Requirements defines the minium amount of instance type defined resources required by a set of preferences
     */
    requirements?: {
      /**
       * Required Architecture of the VM referencing this preference
       */
      architecture?: string;
      /**
       * Required CPU related attributes of the instancetype.
       */
      cpu?: {
        /**
         * Minimal number of vCPUs required by the preference.
         */
        guest: number;
        [k: string]: unknown;
      };
      /**
       * Required Memory related attributes of the instancetype.
       */
      memory?: {
        /**
         * Minimal amount of memory required by the preference.
         */
        guest: number | string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Volumes optionally defines preferences associated with the Volumes attribute of a VirtualMachineInstace DomainSpec
     */
    volumes?: {
      /**
       * PreffereedStorageClassName optionally defines the preferred storageClass
       */
      preferredStorageClassName?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
